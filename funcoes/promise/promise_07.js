// aula 46 -  erro reject - Pode fazer tratamento personalizados para cada erro (then). Ou apenas uma vez (catch no final)

function promessaComPossivelErro(chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro");
    } else {
      resolve("Tudo certo!!");
    }
  });
}
// ou conforme abaixo:

// function promessaComPossivelErro(chanceErro) {
//   try {
//     if (Math.random() < chanceErro) {
//       reject("Ocorreu um erro");
//     } else {
//       resolve("Tudo certo!!");
//     }
//   } catch (erro) {
//     reject(erro);
//   }
// }

promessaComPossivelErro(0.5)
  .then(
    (valor) => valor + "!!!!!", //resolve
    (error) => console.log(`#1: ${error}`) //reject
  )
  .then(
    (valor) => console.log(valor), //resolve
    (error) => console.log(`#2: ${error}`) //reject
  )
  .catch((erro) => console.log(erro));
