const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.get('/detalhes/:id', produtoController.detalhe);
router.get('/adm/produtos/:id', produtoController.detalhe);
router.get('/adm/produtos', produtoController.listarAdm);
router.get('/adm/produtos/cadastro', produtoController.cadastro);
router.post('/adm/produtos/cadastro', produtoController.store);
router.get('/adm/produtos/:id/editar', produtoController.editar);
router.put('/adm/produtos/:id/editar', produtoController.editarProduto);
router.delete('/adm/produtos/:id', produtoController.deletarProduto);


module.exports = router;