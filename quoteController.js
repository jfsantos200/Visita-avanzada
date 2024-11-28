const pool = require('../config/db');
const nodemailer = require('nodemailer');
const path = require('path');

// Configuración de la API de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jfsantos200@gmail.com',
    pass: 'C0p1pa5t3',
  },
});

exports.getAllQuotes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM quotes');
    res.json(result.rows);  // Devuelve todas las cotizaciones
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createQuote = async (req, res) => {
  const { cliente_id, producto, cantidad, precio_unitario, fecha_entrega } = req.body;
  const { file } = req;

  // Insertar la cotización en la base de datos
  try {
    const result = await pool.query(
      'INSERT INTO quotes (cliente_id, producto, cantidad, precio_unitario, fecha_entrega, archivo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [cliente_id, producto, cantidad, precio_unitario, fecha_entrega, file.path]
    );

    // Obtener el correo del cliente
    const clientResult = await pool.query('SELECT email FROM clients WHERE id = $1', [cliente_id]);
    const clientEmail = clientResult.rows[0]?.email;

    if (clientEmail) {
      // Configuración del correo
      const mailOptions = {
        from: 'jfsantos200@gmail.com',
        to: clientEmail,
        subject: 'Cotización de Producto/Servicio',
        text: `Estimado Cliente, adjunto encontrará la cotización solicitada para el producto/servicio: ${producto}.`,
        attachments: [
          {
            filename: path.basename(file.path),
            path: file.path,
          },
        ],
      };

      // Enviar el correo
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ error: 'Error al enviar el correo' });
        }
        res.status(201).json({ message: 'Cotización creada y correo enviado', quote: result.rows[0] });
      });
    } else {
      res.status(400).json({ error: 'Correo del cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
