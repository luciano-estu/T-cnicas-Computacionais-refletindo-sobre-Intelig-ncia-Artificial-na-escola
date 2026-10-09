import { etapas } from "./dados.js";

import {
  sortearAfirmacao,
  sortearNome,
  criarMensagem
} from "./aleatoriedade.js";

// Elementos HTML
const mensagem = document.querySelector("#mensagem");
const afirmacao = document.querySelector("#afirmacao");
const etapa = document.querySelector("#etapa");

const botaoIniciar = document.querySelector("#iniciar");
const botaoAvancar = document.querySelector("#avancar");
const botaoReiniciar = document.querySelector("#reiniciar");

// Controle da missão
let etapaAtual = 0;

// Inicia ou reinicia o jogo
function iniciaJogo() {
  etapaAtual = 0;

  botaoIniciar.classList.add("escondido");
  botaoAvancar.classList.remove("escondido");
  botaoReiniciar.classList.add("escondido");

  mostrarEtapa();
}

// Mostra a etapa atual
function mostrarEtapa() {
  // Verifica se todas as etapas terminaram
  if (etapaAtual >= etapas.length) {
    finalizarJogo();
    return;
  }

  const nome = sortearNome();
  const frase = sortearAfirmacao();

  mensagem.textContent = criarMensagem(nome);
  afirmacao.textContent = frase;

  etapa.textContent =
    `Etapa ${etapaAtual + 1} de ${etapas.length}: ` +
    etapas[etapaAtual];
}

// Avança uma etapa
function avancarEtapa() {
  etapaAtual++;
  mostrarEtapa();
}

// Finaliza a missão
function finalizarJogo() {
  mensagem.textContent =
    "🎉 Parabéns! Você concluiu a missão!";

  afirmacao.textContent =
    "Continue praticando e aprendendo JavaScript.";

  etapa.textContent = "Todas as etapas foram concluídas!";

  botaoAvancar.classList.add("escondido");
  botaoReiniciar.classList.remove("escondido");
}

// Eventos dos botões
botaoIniciar.addEventListener("click", iniciaJogo);
botaoAvancar.addEventListener("click", avancarEtapa);
botaoReiniciar.addEventListener("click", iniciaJogo);

// Exemplo de for...of com condição de parada
function listarEtapas() {
  for (const nomeEtapa of etapas) {
    if (nomeEtapa === "Testar a solução") {
      console.log("Chegamos à etapa de testes!");
      break;
    }

    console.log(nomeEtapa);
  }
}

// Demonstração no console
listarEtapas();
