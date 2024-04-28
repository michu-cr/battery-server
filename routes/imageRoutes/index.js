const express = require('express');
const multer = require('multer');

const router = express.Router();
router.use(express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
  res.status(200).json({ url: `http://localhost:4896/${req.file.filename}` });
});

module.exports = router;
