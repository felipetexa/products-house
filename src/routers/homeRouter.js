const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();
const validacaoRegistroUsuario = require('../middlewares/verificacaoUsuario');

router.get('/', homeController.index)
router.get('/cadastrar', homeController.cadastrar)
router.post('/cadastrar', validacaoRegistroUsuario, homeController.store)
router.get('/login', homeController.login)



module.exports = router;