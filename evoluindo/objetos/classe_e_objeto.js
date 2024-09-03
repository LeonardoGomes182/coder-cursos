class Data {
  // dia = 1;
  // mes = 1;
  // ano = 1970;

  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  formatar() {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

const data1 = new Data(5, 2, 1985);

data1.ano = 2025;
console.log(data1.formatar());
