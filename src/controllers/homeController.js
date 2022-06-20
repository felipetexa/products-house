const ProdutoModel = require('../models/produtoModel');
const UsuarioModel = require('../models/usuarioModel');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { v4: geradorDeId } = require('uuid');

const homeController = {
  index: (req, res) => {
    const produtos = ProdutoModel.findAll();
    res.render('home/landingpage', { produtos });
  },
  login: (req, res) => {
    res.render('home/login');
  },
  cadastrar: (req, res) => {
    res.render('home/cadastro');
  },
  store: (req, res) => {
    const usuario = UsuarioModel.save(req.body);
    let errors = validationResult(req);

    if(errors.isEmpty()) {
        let content = fs.readFileSync("./db.json", "utf8");
        const db = JSON.parse(content);

        const { nome, email, senha } = req.body;

        const senhaCriptografada = bcrypt.hashSync(senha, 10);

        const usuario = {id: geradorDeId(), nome, email, senha: senhaCriptografada }

        db.usuarios.push(usuario);
        content = JSON.stringify(db);

        fs.writeFileSync("./db.json", content);

        return res.redirect("home/login");
    }

    return res.render("home/cadastrar", {listaDeErros: errors.errors, old: req.body})

  }
}

module.exports = homeController;