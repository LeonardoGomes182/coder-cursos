const promessa =new Promise(function(resolve){

    resolve("Dentro da funcao")

})

promessa.then(valor => console.log(valor))
console.log("fim")