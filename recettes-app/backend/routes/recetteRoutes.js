const express = require('express');
const router = express.Router();
const recetteController = require('../controllers/recetteController');

// Vérifie que toutes ces méthodes existent bien dans `recetteController.js`
router.get('/', recetteController.getAllRecettes);
router.get('/:id', recetteController.getRecetteById);
router.post('/', recetteController.createRecette);
router.put('/:id', recetteController.updateRecette);
router.delete('/:id', recetteController.deleteRecette);

module.exports = router;