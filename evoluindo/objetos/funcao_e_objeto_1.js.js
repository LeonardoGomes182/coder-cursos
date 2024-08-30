function criarData(dia = 1, mes = 1, ano = 2024) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    formatar: function() {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const data1 = criarData(7, 11, 2026);
const data2 = criarData(3, 3, 2026);
const data3 = criarData(24, 12, 2025);
const data4 = criarData();

console.log(data1.formatar());
console.log(data2.formatar());
console.log(data3.formatar());
console.log(data4.formatar());
