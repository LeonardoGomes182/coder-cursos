function exibirNoconsole(funcao){
    const resultado = funcao()
    console.log(`O resultado é ${resultado}`)
}

function bomdia(){
    return "Bom dia!"
}

exibirNoconsole(bomdia)

//--------------------------------------------------
function exibirUmaNovaMensagem(somar){
const resultado =somar()
console.log(resultado)
}

function somar(){
    return 2 + 2;
}

exibirUmaNovaMensagem(somar)