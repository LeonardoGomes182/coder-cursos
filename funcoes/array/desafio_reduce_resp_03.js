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

//2 - qtde * preco -> total (map)
const totalItem = (item) => item.qtde * item.preco;

//3-media totais (reduce)

const calcularMedia = (total, valor, indice, array) => {
  const tamanho = array.length;
  const ultimo = tamanho - 1 === indice;
  const novoTotal = total + valor;
  console.log(tamanho, ultimo, novoTotal);
  return ultimo ? novoTotal / tamanho : novoTotal;
};

const resultado = carrinho
.filter(ehFragil)
.map(totalItem)
.reduce(calcularMedia);

console.log(resultado);
