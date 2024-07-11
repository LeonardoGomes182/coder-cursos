function executar(funcao, x = 10 , y = 10) {
  console.log(funcao(x, y));
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b){
    return a * b
}
executar(somar, 50, 10);
executar(subtrair, 50, 10)
executar(multiplicar)


function exibir(funcao, a, b){
    console.log(funcao(a, b))
}

function dividir(a, b){
    return a / b
}

function bomdia(){
    return 'Bom dia'
}
exibir(dividir, 7,2)
exibir(bomdia)

console.log("//---------------------------------------------------------------")
function informar(funcao, a = 10, b =10){
    console.log(funcao(a, b))
}

function somarDoisValores(a, b){
    return a + b
}

informar(somarDoisValores)