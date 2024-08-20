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
                    texto: "Acabar com o racismo, mas virar nazista e matar pessoas inoscentes.",
                    afirmacao: "Parabéns!!! Agora você acabou com o racismo, mas virou um nazista de merda",
                },
                {
                    texto: "Acabar com a homofobia, mas um gay mata sua família.",
                    afirmacao: " Parabéns!!! Você é contra a homofobia e pelo visto contra sua família também",
                },
            ]
    },
    {

        enunciado: "no âmbito ambiental, você prefere:",
        alternativas:
            [
                {
                    texto: "Acabar com a poluição do mundo todo, mas sua mãe morre baleada na sua frente.",
                    afirmacao: "Parabéns!!! O mundo é menos poluído, você salvou a todos, menos a sua mãe. ",
                },
                {
                    texto: "A fome do mundo acaba, mas seu pai vira um psicopata, bate em você e mata seus irmãos.",
                    afirmacao: "Parabéns!!!! A fome do mundo acabou, mas seus traumas aumentaram",
                },
            ]
    },
    {

        enunciado: "no âmbito tecnológico, você prefere:",
        alternativas:
            [
                {
                    texto: "Ser a pessoa mais rica e inteligente do mundo, mas ter que casar com sua irmã ou prima.",
                    afirmacao: "Parabéns!!! Você é um Elon Musk da vida, mas dormr com sua irmã ou prima toda noite",
                },
                {
                    texto: "Achar petróleo e virar bilionário, mas ter que tomar banho todos os dias junto com seus pais.",
                    afirmacao: "Parabéns!!! Você é muito rico, mas é traumatizado por conta de ver seus pais pelados .",
                },
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
     caixaAltermativas.textContent="";
     mostraAlternativas();

}
  
 function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas)
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativas.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativas));
        caixaAltermativas.appendChild(botaoAlternativa);
    }



function respostaSelecionada (alternativas){
    const afirmacoes = alternativas.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}
function mostraResultado(){
caixaPerguntas.textContent = "Em Resumo, as suas escolhas revelaram que você...";
textoResultado.textContent = historiaFinal;
caixaAltermativas.textContent = " ";
}
mostraPerguntas();