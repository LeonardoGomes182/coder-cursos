//Javascript - aula 64 -  classe

class Data {
  #dia = 1;
  #mes = 1;
  #ano = 1970;


  //getters/setters

  getDia() {
    return this.#dia;
  }
  setDia(novoDia) {
    if (novoDia >= 1 && novoDia <= 31) {
      this.#dia = novoDia;
    }
  }

  exibir() {
    return `${this.#dia}/${this.#mes}/${this.#ano}`;
  }
}

const d1 = new Data();
d1.setDia(10);
console.log(d1.getDia());
console.log(d1.exibir());
