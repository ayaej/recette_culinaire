const mongoose = require('mongoose');

const RecetteSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    tempsPreparation: { type: Number, required: true },
    difficulte: { type: String, enum: ['Facile', 'Moyen', 'Difficile'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Recette', RecetteSchema);