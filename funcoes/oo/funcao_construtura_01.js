//Funções e POO  - JS aula 56

//MOLDE Função construtora!
function Data(dia,mes, ano){
    //atributos publicos
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const d1 =  new Data(5, 2, 1985) //Objeto ou instancia #01

const d2 =  new Data(1, 2, 2024) //Objeto ou instancia #02

console.log(typeof d1, d1)

console.log(typeof d2, d2)

d2.dia = 15
d2.ano = 2025

console.log(`${d1.dia}/${d1.mes}/${d1.ano}`)
console.log(`${d2.dia}/${d2.mes}/${d2.ano}`)

