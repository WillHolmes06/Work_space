var pipoca = document.querySelectorAll('p')

pipoca[2].style.color = 'blue'

console.log(pipoca)

for (let c = 0; c < pipoca.length; c++) {
    pipoca[c].style.color = 'purple'
}

function Nome() {
    var entradaNome = prompt('Se o numero da sua mãe fosse dinheiro quanto dinheiro vc teria?')
    let mostraNome = document.querySelector('#mostraNome')
    console.log(entradaNome)

    mostraNome.innerHTML = `Ola ${entradaNome} Bem vindo a nossa academia`
}

function paiegueto() {
    let imagem01 = document.getElementById = '#imagem'
    imagem01.innerHTML = "UmbrelaAcademy.jpg"
}