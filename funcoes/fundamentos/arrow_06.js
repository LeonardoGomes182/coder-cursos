//somar(3)(4)(5)

const somar = (a) => {
  return (b) => {
    return (c) => a + b + c;
  };
};
console.log(somar(3)(4)(5));

const somar2 = (a) => {
  return (b) => (c) => a + b + c;
};
console.log(somar2(3)(4)(5));


const somar3 = a => b =>c => a + b + c;
console.log(somar3(3)(4)(5));
  
const somar4 = (a) => {
  return (b) => {
    return (c)=> {
      return a + b +c
    }
  }
}

console.log("somar4", somar4(10)(20)(30))
const bomDia =()=> 'bom dia'
console.log(bomDia())