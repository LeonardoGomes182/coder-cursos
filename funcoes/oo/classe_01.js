// javascrip - aula 60 -  classe

class Data{
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano

    }
}

const d1 = new Data(5,2,1985)
console.log(d1, typeof d1)
const d2 = new Data(1, 1, 2025)
console.log(d2, typeof d2)

console.log(d2, typeof Data)