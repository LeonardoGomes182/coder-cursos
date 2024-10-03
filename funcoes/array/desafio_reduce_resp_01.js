const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: false },
  { nome: "Impressora", qtde: 5, preco: 1000, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 0, preco: 5.82, fragil: false },
  { nome: "iPad", qtde: 2, preco: 7500, fragil: true },
  { nome: "Tesoura", qtde: 4, preco: 19.2, fragil: false },
  { nome: "Computador", qtde: 2, preco: 5000, fragil: true },
];

// 5000 + 15000 + 10000 = 30.000 / 3 = 10.000

//filter, map, reduce

//1 - Fragil - true (filter)
const ehFragil = (item) => item.fragil;
console.log(carrinho.filter(ehFragil));

//2 - qtde * preco -> total (map)
const totalItem = (item) => item.qtde * item.preco;

//3-media totais (reduce)
const totalizador = (total, valor) => total + valor;

const itensFrageis = carrinho.filter(ehFragil);
const total = itensFrageis
.map(totalItem)
.reduce(totalizador);

const media = total / itensFrageis.length;
console.log(total, media);
