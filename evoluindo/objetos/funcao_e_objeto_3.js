// classe!
//Função construtora -> Criar Objetos

function Data(dia, mes, ano){
    this.dia =  dia;
    this.mes =  mes;
    this.ano =  ano;

    this.formatar = function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1, 1, 2027);

console.log(data1.formatar())

//1. Inicia com letra Maiúscula [Não obritatório]
//2. Chamar função com new Data(...)
//3. Uso do this para acrescentar atributos e metodos no objeto