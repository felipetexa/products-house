const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.get('/detalhes/:id', produtoController.detalhe);
router.get('/adm/produtos', produtoController.listarAdm);
router.get('/adm/produtos/cadastro', produtoController.cadastro);
router.get('/adm/produtos/:id/editar', produtoController.editar);
router.get('/adm/produtos/:id', produtoController.viewAdm);


module.exports = router;