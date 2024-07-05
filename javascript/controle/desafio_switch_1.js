let nota;
let conceito = "G";


switch (conceito) {
  case "A+": nota = 10;  break;
  case "A":  nota = 9;   break;
  case "B+": nota = 8;   break;
  case "B":  nota = 7;    break;
  case "C+": nota = 6;   break;
  case "C":  nota = 5;    break;
  case "D+": nota = 4;   break;
  case "D":  nota = 3;    break;
  case "E+": nota = 2;   break;
  case "E":  nota = 1;    break;
  case "F":  nota = 0;    break;


}
  if(nota !== undefined){
      console.log(`Para o conceito ${conceito} temos a nota ${nota}`);
}else{
    console.log("Nota inválida!!");
  }


