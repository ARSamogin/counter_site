const Tela = document.getElementById("tela")
const Add = document.getElementById("aumentar")
const Min = document.getElementById('diminuir')
const Reset = document.getElementById("reset")
let contagem = 0

Add.onclick = function(){
    contagem++
    Tela.textContent = contagem
}

Min.onclick = function(){
    contagem--
    Tela.textContent = contagem
}

Reset.onclick = function(){
    Tela.textContent = 0
}