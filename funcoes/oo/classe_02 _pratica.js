// javascrip - aula 60 -  classe

//Classe funciona como MOLDE para criar objetos

class Data {
  constructor(dia, mes, ano) {
    (this.dia = dia), (this.mes = mes), (this.ano = ano);
  }

  exibir() {
    return `${this.dia}/${this.mes}/${this.ano}`;
  }
}

const d1 = new Data(10, 10, 2010);
const d2 = new Data(20, 10, 2024);
console.log(d1.exibir());
console.log(d2.exibir());
