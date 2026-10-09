import { afirmacoes, nomes } from "./dados.js";

// Sorteia um elemento de uma lista
export function sortearItem(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

// Sorteia uma afirmação
export function sortearAfirmacao() {
  return sortearItem(afirmacoes);
}

// Sorteia um nome
export function sortearNome() {
  return sortearItem(nomes);
}

// Substitui o marcador pelo nome sorteado
export function criarMensagem(nome) {
  const modelo =
    "Parabéns, {nome}! Você está avançando na missão.";

  return modelo.replace("{nome}", nome);
}
