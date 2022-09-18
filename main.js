const abreContato = document.querySelector(".rodape__botao")
const fechaBtn = document.querySelectorAll(".fecha__modal")
const contato = document.getElementById("div__modal--contato")
const receitaBtn = document.querySelectorAll(".card__botao")
const receita = document.getElementById("div__modal--receita")

//quando clicar em algum lugar fora do modal ele fecha
window.onclick = function (evento) {
    if (evento.target == receita || evento.target == contato) {
        receita.style.display = "none";
        contato.style.display = "none";
        document.body.style.overflow = 'auto'
    }
}

abreContato.addEventListener("click", () => {
    abreModal(contato);
})

fechaBtn.forEach((el) => {
    el.addEventListener('click', () => {
        fechaModal(receita)
        fechaModal(contato)
    })
})

receitaBtn.forEach((el) => {
    el.addEventListener('click', () => {
        abreModal(receita)
    })
})

function abreModal(modal) {
    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function fechaModal(modal) {
    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
}
