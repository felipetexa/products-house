const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/cadastrar', authController.showCadastrar);
router.post('/cadastrar', authController.store);
router.get('/logout', authController.logout);

module.exports = router;