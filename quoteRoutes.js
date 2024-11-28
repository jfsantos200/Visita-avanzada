// const express = require('express');
// const router = express.Router();
// const quoteController = require('../controllers/quoteController');

// router.get('/', quoteController.getAllQuotes);
// router.post('/', quoteController.createQuote);
// router.put('/:id', quoteController.updatequote);
// router.delete('/:id', quoteController.deleteQuote);

// module.exports = router;



const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const multer = require('multer');

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

router.get('/', quoteController.getAllQuotes);
router.post('/', upload.single('file'), quoteController.createQuote);

module.exports = router;