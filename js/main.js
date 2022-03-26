let carta1 = {
    "nome": "AATROX",
    "imagem": "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/pt_BR/5b922bef08881410f8fffa7273c30a75dfb1d11f/assets/img/share/share-1200x630.jpg",
    "atributos": {
        "dano": 8,
        "resistencia": 10,
        "controleDeGrupo": 3,
        "mobilidade": 2,
        "utilidade": 1
    }
};

let carta2 = {
    "nome": "AHRI",
    "imagem": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8d1a3e286ee753cf/5f76a07faf58110efed2652d/Ahri_Skin01.jpg",
    "atributos": {
        "dano": 8,
        "resistencia": 2,
        "controleDeGrupo": 4,
        "mobilidade": 10,
        "utilidade": 2
    }
};

let carta3 = {
    "nome": "AKALI",
    "imagem": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    "atributos": {
        "dano": 9,
        "resistencia": 2,
        "controleDeGrupo": 1,
        "mobilidade": 9,
        "utilidade": 1
    }
};

const cartas = [carta1, carta2, carta3];

let cartaJogador;
let cartaMaquina;

function exibirCartaJogador() {

    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
        style=" width: inherit; height: inherit; position: absolute;">`;
    let tagHTML = `<div id="opcoes" class="carta-status">`

    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]}<br>`;
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {

    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
        style=" width: inherit; height: inherit; position: absolute;">`;
    let tagHTML = `<div id="opcoes" class="carta-status">`

    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += ` <p type="text" name="atributo" value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]}</p><br>`;
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function sortearCarta() {

    let numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }

    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {

    let radioAtributos = document.getElementsByName("atributo");

    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {

    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = `<p class="resultado-final">Venceu!</p>`;
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = `<p class="resultado-final">Perdeu!</p>`;;
    } else {
        elementoResultado.innerHTML = `<p class="resultado-final">Empate!</p>`;;
    }

    exibirCartaMaquina();
    document.getElementById("btnJogar").disabled = true;

}