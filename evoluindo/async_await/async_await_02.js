//Funções em javascript - aula 49

//Uma função async sempre vai retornar uma PROMISE!!!

//https://bible-api.com/john 3:16

async function obterVersiculo(livro, capitulo, versiculo) {
  const url = `https://bible-api.com/${livro} ${capitulo}:${versiculo}`;
  const resposta = await fetch(url);
  const dados = await resposta.json();
  return dados.verses[0].text;
}

async function executar(){
  const texto = await obterVersiculo("luke", 1, 1)
  console.log(texto)
}

executar();
