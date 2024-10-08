// aula 45 -  erro reject - quando você rejeita uma promise, gerando um erro.

function promessaComPossivelErro(chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro");
    } else {
      resolve("Tudo certo!!");
    }
  });
}

promessaComPossivelErro(0.5)
  .then((valor) => valor + "!!!!")
  .then((valor) => console.log(valor))
  .catch((erro) => console.log(erro))
  .finally(() => console.log("Fim"));
