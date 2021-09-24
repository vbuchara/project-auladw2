const { Router } = require('express');
const multer = require('multer');
const path = require('path');

const AlbumDigitalController = require('../controllers/AlbumDigitalController');
const storage = require('../../config/multerStoreConfig');

const router = Router();
const upload = multer({ storage });

router.get('/relatorio', AlbumDigitalController.getAllAlbumDigital);

module.exports = router;