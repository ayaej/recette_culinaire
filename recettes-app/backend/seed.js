const mongoose = require('mongoose');
const Recette = require('./models/Recette');
require('dotenv').config();
const connectDB = require('./config/db');

await connectDB();
console.log(`✅ Insertion des recettes dans la base : ${process.env.DB_NAME || "recettes"}`);

const seedRecettes = [
    {
        nom: "Pâtes Carbonara",
        ingredients: ["Pâtes", "Œufs", "Lardons", "Parmesan"],
        instructions: "Faire cuire les pâtes, ajouter les œufs et les lardons, puis le parmesan.",
        tempsPreparation: 20,
        difficulte: "Facile"
    },
    {
        nom: "Poulet au Curry",
        ingredients: ["Poulet", "Curry", "Crème fraîche", "Oignons", "Riz"],
        instructions: "Faire revenir les oignons, ajouter le poulet et le curry, puis la crème.",
        tempsPreparation: 30,
        difficulte: "Moyen"
    },
    {
        nom: "Tarte aux Pommes",
        ingredients: ["Pâte feuilletée", "Pommes", "Sucre", "Beurre", "Cannelle"],
        instructions: "Déposer les pommes sur la pâte, saupoudrer de sucre et cuire au four.",
        tempsPreparation: 45,
        difficulte: "Facile"
    },
    {
        nom: "Salade César",
        ingredients: ["Salade", "Poulet", "Croutons", "Parmesan", "Sauce César"],
        instructions: "Mélanger les ingrédients et assaisonner avec la sauce César.",
        tempsPreparation: 15,
        difficulte: "Facile"
    }
];

// Insérer les recettes dans la base de données
const seedDatabase = async () => {
    try {
        await connectDB();
        await Recette.deleteMany(); // Supprime les anciennes recettes
        await Recette.insertMany(seedRecettes); // Ajoute les nouvelles recettes
        console.log("✅ Recettes insérées avec succès !");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Erreur lors de l'insertion des recettes :", error);
        mongoose.connection.close();
    }
};

// Lancer le script
seedDatabase();