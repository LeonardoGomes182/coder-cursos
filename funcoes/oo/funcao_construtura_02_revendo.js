//Funções e POO  - JS aula 56

//MOLDE Função construtora!


function Data(dia, mes, ano){
    this.dia = dia
    this.mes =  mes
    this.ano = ano

    this.exibir = function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(1,1,2023)
const d2 = new Data(5,2,2025)

console.log(d1.exibir())
console.log(d2.exibir())