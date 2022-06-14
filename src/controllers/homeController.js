const ProdutoModel = require('../models/produtoModel');

const homeController = {
  index: (req, res) => {
    const produtos = ProdutoModel.findAll();
    res.render('home/landingpage', { produtos });
  }
}

module.exports = homeController;