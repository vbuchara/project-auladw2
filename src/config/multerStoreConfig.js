const multer = require('multer');

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  }
});

module.exports = storage;