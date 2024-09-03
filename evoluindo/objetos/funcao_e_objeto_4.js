// classe!
//Função construtora -> Criar Objetos

function Data(dia, mes, ano) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;

  this.formatar = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}
const data1 = new Data(30, 8, 2024);

data1.dia = 31;

const data2 =  new Data(10,10,2024)
console.log(data1.formatar());

console.log(data2.formatar())

//1. Inicia com letra Maiúscula [Não obritatório]
//2. Chamar função com new Data(...)
//3. Uso do this para acrescentar atributos e metodos no objeto
