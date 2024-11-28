const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Asegúrate de que la ruta sea correcta

// Ruta GET para obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Ruta GET para obtener un usuario específico por ID
router.get('/:id', userController.getUserById);

// Ruta POST para crear un nuevo usuario
router.post('/', userController.createUser);

// Ruta PUT para actualizar un usuario por ID
router.put('/:id', userController.updateUser);

// Ruta DELETE para eliminar un usuario por ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
