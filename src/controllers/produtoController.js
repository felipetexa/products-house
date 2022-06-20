const ProdutoModel = require('../models/produtoModel');
const fs = require('fs');

const produtoController = {
  detalhe: (req, res) => {
    const {id} = req.params;
    const produto = ProdutoModel.findById(id);
    res.render('produtos/detalhes', { produto });
  },
  listarAdm: (req, res) => {
    const produtos = ProdutoModel.findAll();
    res.render('adm/produtos/lista', { produtos });
  },
  cadastro: (req, res) => {
    res.render('adm/produtos/cadastro');
  },
  editar: (req, res) => {
    const {id} = req.params;
    const produto = ProdutoModel.findById(id);
    res.render('adm/produtos/editar', { produto });
  },
  viewAdm: (req, res) => {
    const {id} = req.params;
    const produto = ProdutoModel.findById(id);
    res.render('adm/produtos/detalhesAdm', { produto });
  }
}

module.exports = produtoController;