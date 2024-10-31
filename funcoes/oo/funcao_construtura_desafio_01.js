//função construtura - aula 59

//funcao construtura -> Produto
//nome, preco, desconto (0-1 )
//precoFinal

function Produto(nome, preco, desconto = 0) {
    //atributos
    this.nome= nome,
    this.preco = preco,
    this.desconto = desconto
    //metodos
    this.precoFinal = function(){
        return this.preco * (1 - this.desconto)
    }
}


//Criar duas instancia de produto

const p1 = new Produto('iPad', 7500, 0.1)
console.log(p1.nome,  p1.precoFinal(), p1)

const p2 = new Produto("Geladeira", 5000, 0.15)

console.log(p2.nome, p2.precoFinal(), p2)