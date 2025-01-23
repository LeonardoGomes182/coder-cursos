const a = 4
console.log(a)

function bomDia(mensagem){
    console.log("Bom dia")
    console.log(mensagem)
}
bomDia("boa noite")

const boaTarde =  function(){
    console.log("Boa tarde")
}

boaTarde()

function somar(a = 0, b= 2){
return a + b
}

let resultado  = somar()

console.log(resultado)