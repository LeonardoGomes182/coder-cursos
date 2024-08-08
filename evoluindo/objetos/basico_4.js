const cliente = {
  codigo: 151515,
  nome: "Gustavo Henrique Lopes",
  vip: true,
  endereco: {
    logradouro: "Rua Santo Antonio",
    numero: 877,
    complemento: "Apto 202 Bloco C",
    pontosRef: ["Hospital Sao Pedro", "Shopping Rio"],
  },
  filhos: [
    { nome: "Pedro", anoDeNascimento: 2004 },
    { nome: "Maria", anoDeNascimento: 2016 },
    { nome: "Daniel", anoDeNascimento: 2018 },
  ],
};


console.log(cliente.endereco)
console.log(cliente.filhos[1])
console.log(cliente.filhos[1].nome)