const produto = {
  nome: "Macbook",
  preco: 32000.0,
  desconto: 0.05,
  precoComDesconto: function () {//Método
    return this.preco
  },
};

console.log(produto.precoComDesconto());
