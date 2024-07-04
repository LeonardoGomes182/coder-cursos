const hora = 1;
let saudacao;
if (hora < 12) {
  saudacao = "Bom dia!";
} else  if (hora < 18) {
    saudacao = "Boa tarde!";
} else if( hora <= 22){
    saudacao = "Boa noite";
}else {
  saudacao = 'vai dormir'
}


console.log(saudacao);
