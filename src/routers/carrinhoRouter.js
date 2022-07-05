const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');
const isLogin = require('../middlewares/isLogin');

router.use(isLogin);
router.get('/carrinho', carrinhoController.showCart);
router.post('/carrinho/adicionar', carrinhoController.addCart);
router.delete('/carrinho/:id/remover', carrinhoController.removeCart);

module.exports = router;