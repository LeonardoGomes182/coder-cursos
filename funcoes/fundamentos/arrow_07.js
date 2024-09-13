//somar(3)(4)(5)

const somar = (a) => {
  return (b) => {
    return (c) => a + b + c;
  };
};
console.log(somar(10)(10)(5));

const somar2 = a => b => c => a + b + c;
console.log(somar2(10)(10)(5));


const subtrair = (a, b)=> a - b;
console.log(subtrair(10, 5))



const bomDia=()=>"Bom dia!!!!!!!"
console.log(bomDia())

const boaTarde = _ => 'Boa tarde' //só pode remover o par de chaves neste caso, se colocar um parametro para igonorar
console.log(boaTarde())


const subtrair2 = (a,b)=> a-b
console.log(subtrair2(20,8))

const multiplicar = (b, c)=> b*c;
console.log(multiplicar(10,10))