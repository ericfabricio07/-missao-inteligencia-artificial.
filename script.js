const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No fim de uma aula, seu professor pede para você criar um projeto sobre Inteligência Artificial. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador, a tecnologia está avançando rápido demais!",
                afirmacao: "No início, você se sentiu assustado com o ritmo da evolução tecnológica."
            },
            {
                texto: "Que incrível! Isso vai abrir muitas oportunidades para o futuro.",
                afirmacao: "Desde o começo, você enxergou a IA como uma grande aliada para o futuro."
            }
        ]
    },
    {
        enunciado: "Ao começar a programar o site, você decide usar uma ferramenta de IA generativa para ajudar no código. Como você faz isso?",
        alternativas: [
            {
                texto: "Escreve comandos detalhados para a IA gerar blocos específicos de código e os estuda.",
                afirmacao: "Aprendeu a utilizar prompts de forma inteligente para otimizar seu aprendizado."
            },
            {
                texto: "Apenas copia e cola o código inteiro que a IA gerou sem tentar entender.",
                afirmacao: "Acabou dependendo muito da automação pura, sem focar tanto na base técnica."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da sua jornada!";
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
    textoResultado.textContent = historiaFinal;
}

mostraPergunta();
