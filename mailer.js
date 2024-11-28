// middlewares/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Servidor SMTP de Gmail
    port: 587,
    secure: false, // true para 465, false para otros puertos
    auth: {
        user: 'jfsantos200@gmail.com', //  correo de envio
        pass: 'C0p1pa5t3' //  contraseña
    }
});

const sendMail = (data, attachmentPath, excelFilePath) => {
    const mailOptions = {
        from: `${data.name} <${data.email}>`,
        to: 'email@dominio.com', // Correo del destinatario
        subject: data.subject,
        html: data.message,
        attachments: []
    };

    if (attachmentPath) {
        mailOptions.attachments.push({ path: attachmentPath });
    }

    if (excelFilePath) {
        mailOptions.attachments.push({ path: excelFilePath });
    }

    return transporter.sendMail(mailOptions);
};

module.exports = sendMail;