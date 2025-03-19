const Recette = require('../models/Recette');

exports.getAllRecettes = async (req, res) => {
    try {
        const recettes = await Recette.find();
        res.json(recettes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRecetteById = async (req, res) => {
    try {
        const recette = await Recette.findById(req.params.id);
        if (!recette) return res.status(404).json({ message: 'Recette non trouvée' });
        res.json(recette);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRecette = async (req, res) => {
    try {
        const newRecette = new Recette(req.body);
        await newRecette.save();
        res.status(201).json(newRecette);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateRecette = async (req, res) => {
    try {
        const updatedRecette = await Recette.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecette) return res.status(404).json({ message: 'Recette non trouvée' });
        res.json(updatedRecette);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRecette = async (req, res) => {
    try {
        const deletedRecette = await Recette.findByIdAndDelete(req.params.id);
        if (!deletedRecette) return res.status(404).json({ message: 'Recette non trouvée' });
        res.json({ message: 'Recette supprimée' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};