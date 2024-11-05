
//funcao construtura -> Produto
//nome, preco, desconto (0-1 )
//precoFinal

function Produto(nome, preco, desconto = 0) {
    //atributos
    this.nome =  nome,
    this.preco =  preco,
    this.desconto = desconto

    //metodos
    this.precoFinal = function(){
        return this.preco * (1 - this.desconto)
    }
}

const p1 =  new Produto('fogao', 4500, 0.10)
console.log(p1.nome, p1.precoFinal())

const p2 = new Produto('PC Gamer', 14000, 0.15)
console.log(p2.nome, p2.precoFinal())