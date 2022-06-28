const ProdutoModel = require('../models/produtoModel');
const fs = require('fs');

const produtoController = {
  detalhe: (req, res) => {
    const {id} = req.params;
    const produto = ProdutoModel.findById(id);
    res.render('adm/produtos/detalhes', { produto });
  },
  listarAdm: (req, res) => {
    const produtos = ProdutoModel.findAll();
    res.render('adm/produtos/lista', { produtos });
  },
  cadastro: (req, res) => {
    res.render('adm/produtos/cadastro');
  },
  store: (req, res) => {
    const { imagem, nome, preco, ativo, descricao } = req.body;
    const produto = {
        nome,
        imagem,
        preco,
        ativo: (ativo ? true : false),
        descricao,
    };

    ProdutoModel.save(produto);

    return res.redirect("/adm/produtos");
},
  editar: (req, res) => {
    const {id} = req.params;
    const produto = ProdutoModel.findById(id);
    res.render('adm/produtos/editar', { produto });
  },
  editarProduto: (req, res) => {
        const {id} = req.params;
        const {nome, imagem, preco, ativo, descricao} = req.body;
        const produto = {
            id,
            nome,
            imagem,
            preco,
            ativo: (ativo ? true : false),
            descricao
        }

        ProdutoModel.update(id, produto);
        return res.redirect("/adm/produtos");
  },
  deletarProduto: (req, res) => {
    const {id} = req.params;
    ProdutoModel.delete(id);
    return res.redirect("/adm/produtos");
}
}

module.exports = produtoController;