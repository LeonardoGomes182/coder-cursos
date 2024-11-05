//Javascript - aula 66 -  classe

class Data {
  #dia = 1;
  #mes = 1;
  #ano = 1970;

  //getters/setters

  get dia() {
    return this.#dia;
  }
  set dia(novoDia) {
    if (novoDia >= 1 && novoDia <= 31) {
      this.#dia = novoDia;
    }
  }

  get mes() {
    return this.#mes;
  }
  set mes(novoMes) {
    if (novoMes >= 1 && novoMes <= 12) {
      this.#mes = novoMes;
    }
  }

  get ano() {
    return this.#ano;
  }

  set ano(anoNovo) {
    if (anoNovo >= 1970 && anoNovo <= 2025) {
      this.#ano = anoNovo;
    }
  }

  exibir() {
    return `${this.#dia}/${this.#mes}/${this.#ano}`;
  }
}

const d1 = new Data();
d1.dia = 10;
d1.mes = 11;
d1.ano = 2025;
console.log(d1.dia);
console.log(d1.mes);
console.log(d1.ano);
console.log(d1.exibir());
