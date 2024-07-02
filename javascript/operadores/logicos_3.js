const emBlackFriday = false;
const temEstoque = true;
const temPerfilFunciuonario = true;

permiteDescontoMaximo = emBlackFriday && temEstoque;

console.log("Permitir desconto máximo?", permiteDescontoMaximo)

permiteDescontoMaximo = (emBlackFriday && temEstoque) || temPerfilFunciuonario;

console.log("Permitir desconto máximo para funcionário?", permiteDescontoMaximo)