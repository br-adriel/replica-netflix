// animacaodos posters
const slide = document.getElementsByClassName("slide")[0];
var posters = Object.values(document.getElementsByClassName("poster"));

var animacao = setInterval(proximo, 10000);


function anterior() {
    primeiro = posters.pop();
    posters.unshift(primeiro);
    
    let conteudo = '';
    for (let i=0; i<posters.length; i++) {
        conteudo = conteudo + posters[i].outerHTML;
    }
    slide.innerHTML = conteudo;
}

function proximo() {
    primeiro = posters.shift();
    posters.push(primeiro);
    
    let conteudo = '';
    for (let i=0; i<posters.length; i++) {
        conteudo = conteudo + posters[i].outerHTML;
    }

    slide.innerHTML = conteudo;
}

// modal
const modalFade = document.getElementById("modal-out");
modalFade.addEventListener("click", desaparecer);

var botoesFechar = Object.values(document.getElementsByClassName("fechar-modal"));
for (let i=0; i<botoesFechar.length; i++) {
    botoesFechar[i].addEventListener("click", desaparecer);
}

function desaparecer() {
    modalFade.style.display = "none";
}

const botaoDestaque = document.getElementById("botao-destaque");
botaoDestaque.addEventListener("click", aparecer);

function aparecer() {
    modalFade.style.display = "flex";
}
