// javascrip - aula 60 -  classe


//Classe funciona como MOLDE para criar objetos
class Data{
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
    }

    exibir(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

//o problema é que a classe está permitindo dados inconsistentes
const d1 = new Data(45792,-985)
const d2 = new Data('opa', 1, 2025)

console.log(d1.exibir())
console.log(d2.exibir())
