const Tela = document.getElementById("tela")
const Add = document.getElementById("aumentar")
const Min = document.getElementById('diminuir')
const Reset = document.getElementById("reset")
const Mais10 = document.getElementById("mais10")
const Menos10 = document.getElementById("menos10")
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

Mais10.onclick = function(){
    contagem += 10
    Tela.textContent = contagem
}

Menos10.onclick = function(){
    contagem -= 10
    Tela.textContent = contagem
}