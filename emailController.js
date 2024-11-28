const nodemailer = require('nodemailer');

// Configuración de la API de correos
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jfsantos200@gmail.com',
    pass: 'C0p1pa5t3',
  },
});

exports.sendEmail = async (req, res) => {
  const { nombre, mensaje } = req.body;
  try {
    const mailOptions = {
      from: 'jfsantos200@gmail.com',
      to: 'destino@correo.com',
      subject: 'Nuevo Mensaje',
      text: `Nombre: ${nombre}\nMensaje: ${mensaje}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
