const { Router } = require('express');
const multer = require('multer');
const path = require('path');

const AlbumDigitalController = require('../controllers/AlbumDigitalController');
const storage = require('../../config/multerStoreConfig');

const router = Router();
const upload = multer({ storage });


router.get('/album_form', (request, response) => {
  // response.sendFile(path.join(__dirname, '../../pages/html/album_form.html');
  response.render('album_form');
});

router.post('/album_form', upload.single('photo'), AlbumDigitalController.insertAlbumDigital);

module.exports = router;