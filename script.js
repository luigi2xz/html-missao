const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');


const perguntas = [
    {
        enunciado: 'No âmbito social, você prefere:',
        alternativas: [
        {
             texto: ' Acabar com o racismo do mundo, mas sua mãe morre;',
             afirmacao: ' Você acabou com o racismo e com a vida da sua mãe também ;',

        },

        {
            texto: 'Acabar com a homofobia do mundo, mas seu pai tem um infarto e morre ;',
            afirmacao: ' Seu pai foi embora junto com a homofobia KKK;',

       },
    ]
    },
   
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'Acabar com a poluiçao do mundo, mas toda poluição ir pra sua casa;',
             afirmacao: ' O mundo deixou de ser uma lixeira e sua casa virou um lixão;',

        },

        {
            texto: 'Acabar com todo e qualquer desmatamento, mas ter que viver na mata;',
            afirmacao: 'Parabéns, você virou o tarzan;',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: ' Ser a pessoa mais rica do mundo, mas ter que casar com sua irmã .',
             afirmacao: ' Você é milíonario, mas também é traumatizado.'
        },

        {
            texto: ' Ser inteligente e rico, tipo o Elon Musk, mas ter que tomar banho todos os dias com seus pais. ',
            afirmacao: 'Parabéns Elon Musk 2.0, pelo menos você tem dinheiro para pagar sua terapia  ',

       }
    ]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmacao;
    historiaFinal +=  afirmacoes +" ";
    atual++;
    mostraPerguntas();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Resultado final do jogo de escolhas:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPerguntas();