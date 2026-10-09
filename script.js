:root {
    --cor-fundo: #0d1117;
    --cor-card: #161b22;
    --cor-texto: #c9d1d9;
    --cor-destaque: #58a6ff;
    --cor-botao: #238636;
    --cor-botao-hover: #2ea043;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 600px;
    background-color: var(--cor-card);
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    text-align: center;
}

h1 {
    color: var(--cor-destaque);
    margin-bottom: 15px;
}

p {
    margin-bottom: 20px;
    font-size: 1.1rem;
    line-height: 1.5;
}

.caixa-perguntas {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;
    min-height: 60px;
}

.caixa-alternativas {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
}

button {
    background-color: var(--cor-botao);
    color: #ffffff;
    border: none;
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

button:hover {
    background-color: var(--cor-botao-hover);
    transform: translateY(-2px);
}

.escondido {
    display: none !important;
}

.texto-resultado {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid var(--cor-destaque);
    text-align: left;
}
