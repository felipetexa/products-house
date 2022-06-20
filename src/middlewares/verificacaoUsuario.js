const { body } = require('express-validator');

const validacaoRegistroUsuario = [
    body("nome")
        .notEmpty().withMessage("Deve preencher o nome").bail()
        .isLength({min: 3, max: 200}).withMessage("O nome deve ter no minimo 3 caracteres"),
    body("email")
        .notEmpty().withMessage("Deve preencher o email").bail()
        .isEmail().withMessage("Deve ser um email válido"),
    body("senha")
        .notEmpty().withMessage("Deve preencher a senha").bail()
        .isLength({min: 3}).withMessage('A senha deve ter, no mínimo, 3 caracteres')
    // body('confirmacaoSenha').custom((value, { req }) => {
    //     if (value !== req.body.senha) {
    //       throw new Error('As senhas não conferem');
    // //     }
        
    //     return true;
    //   })
]

module.exports = validacaoRegistroUsuario;