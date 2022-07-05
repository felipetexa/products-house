const carrinhoController = {
  showCart: (req, res) => {
    const { carrinho } = req.session;

    let total = 0;

    if(!carrinho){
    return res.render('home/carrinho', { carrinho: [], total })
    }

    carrinho.forEach(produto => {
      total += parseFloat(produto.preco) //percorre o array criado para o carrinho e soma os preços
    })

    return res.render('home/carrinho', { carrinho, total })

  },
  addCart: (req, res) => {
    const { productId, imagem, nome, preco } = req.body;
    const produto = {
      id: productId,
      imagem,
      nome,
      preco
    }

    if(req.session.carrinho){
      req.session.carrinho.push(produto) //se ja existir o carrinho, adiciona o produto
    } else {
      req.session.carrinho = [produto] //se não existir, cria o carrinho com um produto
    }

    return res.redirect('/carrinho');
  },
  removeCart: (req, res) => {
    const { id } = req.params;
    let { carrinho } = req.session;

    const index = carrinho.findIndex(produto => produto.id == id);

    const carrinhoAtualizado = carrinho.splice(index, 1);

    carrinho = carrinhoAtualizado;

    if(carrinho.length <= 0){
      carrinho = [];
      return res.redirect('/carrinho');
    }

    return res.redirect('/carrinho');
  }
};

module.exports = carrinhoController;