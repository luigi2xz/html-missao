const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAltermativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {

        enunciado: "no âmbito social, você prefere:",
        alternativas:
            [
                {
                    texto: "Acabar com o racismo, mas você você se torna nazista",
                    afirmacao: "Parabéns!!! Você acabou com o racismo, mas agora você é nazista",
                },
                {
                    texto: "Acabar com o nazismo, mas se tornar um racista",
                    afirmacao: " Parabéns!!! Você acabou com o nazismo, porém se tornou um rascista MATADOR DE PRETO",
                },
            ]
    },
    {

        enunciado: "no âmbito ambiental, você prefere:",
        alternativas:
            [
                {
                    texto: "Fazer com que acabe a poluição do mundo todo, mas isso custaria a vida da sua família .",
                    afirmacao: "Parabéns!!! Tem sua família viva, mas fez com que eles morressem por conta da poluição no mundo ",
                },
                {
                    texto: "Se tornar filho(a) da Rihanna, porém desmatar a Amazônia inteira junto do Bolsonaro nos cavalos da cavalaria com um isqueiro bic e uma tesoura sem um extintor.",
                    afirmacao: "Parabéns!!!! Vc nasceu filho da Rihanna, mas desmatou toda a Amazônia junto do Bolsonaro com apenas um inqueiro e uma tesoura sem nenhum extintor",
                },
            ]
    },
    {

        enunciado: "no âmbito tecnológico, você prefere:",
        alternativas:
            [
                {
                    texto: "Se torna a pessoa mais rica do mundo, porém se casar com o Elon Musk e viver com ele sem poder se separar para o resto de suas vidas.",
                    afirmacao: "Parabéns!!! Vc se tornou a pessoa mais rica do mundo, porém se casou com o velho nojento do Elon Musk",
                },
                {
                    texto: "Descobrir como funciona a inteligência artificial, porém terá que fazer parte de um trisal com a Taylor Swift e o Kanye West e escutar eles cantando todo dia e noite no banho juntos.",
                    afirmacao: "Parabéns!!! Vc descubriu como funciona a inteligência artifcial, porém está participando de um trisal com a Taylor e o Kanye West e escuta eles cantando toda noite juntos no banho.",
                },
            ]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAltermativas.textContent="";
     mostraAlternativas();

}
  
 function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativas.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(pergunta));
        caixaAltermativas.appendChild(botaoAlternativa);
    }

  }

function respostaSelecionada (pergunta){
    atual++;
    mostraPerguntas();
}

mostraPerguntas();