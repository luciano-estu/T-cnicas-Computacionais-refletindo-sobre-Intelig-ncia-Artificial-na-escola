import { buscaItemAleatorio, geraNomeAleatorio } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.querySelector(".btn-iniciar");
const botaoJogarNovamente = document.querySelector(".btn-jogar-novamente");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let nomePersonagem = "";

botaoIniciar.addEventListener("click", iniciaJogo);

function iniciaJogo() {
    nomePersonagem = geraNomeAleatorio();
    telaInicial.classList.add("escondido");
    caixaPrincipal.classList.remove("escondido");
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        exibeResultadoFinal();
        return;
    }

    perguntaAtual = buscaItemAleatorio(perguntas);
    
    const enunciadoComNome = perguntaAtual.enunciado.replace(/[nome]/g, nomePersonagem);
    caixaPerguntas.textContent = enunciadoComNome;

    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        
        const textoAlternativa = alternativa.texto.replace(/[nome]/g, nomePersonagem);
        botaoAlternativa.textContent = textoAlternativa;

        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoComNome = opcaoSelecionada.afirmacao.replace(/[nome]/g, nomePersonagem);
    historiaFinal += afirmacaoComNome + " ";
    atual++;
    mostraPergunta();
}

function exibeResultadoFinal() {
    caixaPerguntas.textContent = `Jornada final de ${nomePersonagem}:`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.remove("escondido");
    
    botaoJogarNovamente.classList.remove("escondido");
    botaoJogarNovamente.addEventListener("click", reiniciaJogo);
}

function reiniciaJogo() {
    caixaResultado.classList.add("escondido");
    botaoJogarNovamente.classList.add("escondido");
    iniciaJogo();
}
