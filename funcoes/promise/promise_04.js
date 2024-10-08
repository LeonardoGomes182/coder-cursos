//Callback - aula 43

setTimeout(() => {
  console.log("Executando callback...");
  setTimeout(function () {
    console.log("Executando callback...");
    setTimeout(function () {
      console.log("Executando callback...");
      setTimeout(function () {
        console.log("Executando callback...");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);


//promise
function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, tempo);
  });
}

esperarPor()
  .then( esperarPor)
  .then(esperarPor)
  .then(esperarPor)

  function aguardarPor( tempo = 3000){
    return new Promise((resolve)=> {
      setTimeout(()=> {
        console.log("Executando teste promise...");
        resolve()
      }, tempo);
    })
  }

  aguardarPor()
  .then(esperarPor)
  .then(esperarPor)
  .then(esperarPor)