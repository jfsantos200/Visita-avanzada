const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');  // Verifica que la ruta de importación sea correcta

// Ruta GET para obtener todas las visitas
router.get('/', visitController.getAllVisits);

// Ruta GET para obtener una visita específica por ID
router.get('/:id', visitController.getVisitById);

// Ruta POST para crear una nueva visita
router.post('/', visitController.createVisit);

// Ruta PUT para actualizar una visita por ID
router.put('/:id', visitController.updateVisit);

// Ruta DELETE para eliminar una visita por ID
router.delete('/:id', visitController.deleteVisit);

module.exports = router;
