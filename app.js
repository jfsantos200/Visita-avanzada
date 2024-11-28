const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const pool = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const visitRoutes = require('./routes/visitRoutes');
const userRoutes = require('./routes/userRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;

// Configuración de Multer para subir archivos PDF
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));  // Servir archivos subidos

// Rutas
app.use('/clients', clientRoutes);
app.use('/visits', visitRoutes);
app.use('/users', userRoutes);
app.use('/quotes', quoteRoutes);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
