const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// Initialisation de l'application
const app = express();
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Importation des routes
const recetteRoutes = require('./routes/recetteRoutes');
app.use('/api/recettes', recetteRoutes);

// Port d'écoute du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));