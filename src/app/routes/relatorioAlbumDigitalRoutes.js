const { Router } = require('express');

const AlbumDigitalController = require('../controllers/AlbumDigitalController');
const auth = require('../middlewares/auth');
const { route } = require('./usuarioRoutes');

const router = Router();

// auth = Middleware para autenticação da rota. Desativado para livre acesso
router.get('/relatorio', auth, AlbumDigitalController.getAllAlbumDigital);
router.get('/getRelatorios', auth, AlbumDigitalController.getFilteredAlbumDigital);


module.exports = router;