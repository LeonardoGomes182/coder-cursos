const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt' )

const lerArquivo =  function(erro, conteudo){
    if(erro) return
    console.log(conteudo.toString())

}
// fs.readFile(caminho, lerArquivo) //assincrona -  nao aguarda a leitura do arquivo
// console.log("Fim #01 !!!!")

const conteudo = fs.readFileSync(caminho) //sincrona -  aguarda a leitura do arquivo

console.log(conteudo.toString())
console.log("Fim #02 !!!!")

//Callback é passar uma função como parametro para outra função