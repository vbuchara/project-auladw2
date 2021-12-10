const { Router } = require('express');

const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/login', (request, response) => { response.render('login'); });

// É possivel alterar a função chamada por essa rota para cadastrar um usuário,
// apenas troque "login" por "insertUsuario"
router.post('/login', UsuarioController.login);

router.get('/logout', (request, response) => {
  response.clearCookie('token');
  response.redirect('/');
});

module.exports = router;