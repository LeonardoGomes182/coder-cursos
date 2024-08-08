const data = {
  dia: 7,
  mes: 11,
  ano: 2026,
  formatar: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

data.noFuturo = true;

console.log(data.formatar());
