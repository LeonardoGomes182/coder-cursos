//Funções e POO  - JS aula 56

//MOLDE Função construtora!
function Data(dia,mes, ano){
    //atributos publicos
    this.dia = dia
    this.mes = mes
    this.ano = ano
    
    //Método de instancia publico (comportamento)
    this.exibir = function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 =  new Data(5, 2, 1985) 
const d2 =  new Data(1, 2, 2024) 

console.log(d1.exibir())
console.log(d2.exibir())

