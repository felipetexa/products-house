const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();
const validacaoRegistroUsuario = require('../middlewares/verificacaoUsuario');

router.get('/', homeController.index);
router.get("/produtos/:id", homeController.showOneProduct);



module.exports = router;