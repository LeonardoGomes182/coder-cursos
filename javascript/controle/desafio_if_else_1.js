// segunda até sexta => 8 horas
// Sabado => 4 horas
// Domingo => 0 horas

const diaDaSemana = "sabado"; //segunda terca, quarta, quinta, sexta, sabado , domingo

let cargaHoraria;

const eDiaUtil =
  diaDaSemana === "segunda" 
  ||   diaDaSemana === "terca" 
  ||   diaDaSemana === "quarta" 
  ||   diaDaSemana === "quinta" 
  ||   diaDaSemana === "sexta";

if (eDiaUtil) {
  cargaHoraria = 8;
} else if (diaDaSemana === "sabado") {
  cargaHoraria = 4;
} else if (diaDaSemana === "domingo") {
  cargaHoraria = 0;
}
console.log("A carga horária é " + cargaHoraria + " horas");
