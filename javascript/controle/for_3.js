let conteudo = "";

for (let linha = 1; linha <= 3; linha++) {
  for (let coluna = 1; coluna <= 3; coluna++) {
    conteudo += `[${linha}-${coluna}] `;
  }
  conteudo += `\n`;
}
console.log(conteudo);
