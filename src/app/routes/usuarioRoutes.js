const { Router } = require('express');

const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/login', (request, response) => { response.render('login'); });
router.post('/login', UsuarioController.login);

module.exports = router;