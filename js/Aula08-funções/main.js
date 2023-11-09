//function somaNumeros(num1 = 1, num2 = 1) {
//    return num1 + num2;
//}
//let x = somaNumeros(4, 5); // Chamada da função addNums
//console.log(x);
//let z = myFunc(4, 5); // Chamada da função myFunc
//console.log(z);
//function myFunc(num1, num2) {
//    return num1 * num2;
//}
//let soma = somaNumeros(10, 7)
//console.log("Essa variável soma " + soma)
//const hello = () => {
//    return 'Olá Arrow Function!';
//}
//const addNums2 = (num1 = 1, num2 = 1) => {
//    return num1 + num2;
//}
////Arrow functions
//console.clear();
//const hello = () => {
//    return 'Olá Arrow Function!';
//};
//console.log(hello()); // Retorna o objeto função
//console.log(somaNumeros(4,8,8)); // Executa a função e imprime a string no return

function imparPar(num) {
    if (num % 2 == 0) {
        return `O numero ${num} é Par`
    } else if (num % 2 == 1) {
        return `O numero ${num} é Impar`
    } else {
        return 'Não consegui identificar se é impar ou par'
    }
}

let receberamPrimeiroNumero = imparPar(28)
console.log(receberamPrimeiroNumero)

let receberamSegundoNumero = imparPar(5.75)
console.log(receberamSegundoNumero)

var contexto = 5.75 % 2
console.log(contexto)

console.clear()

const Celular = {
    marca: 'Apple',
    modelo: 'Iphone 15 pro max',
    cor: 'Rosa',
    memoria: '512gb',
    memoriaRam: '16gb'
}

console.log(Celular)

console.clear();
const boasVindas = () => {
    alert('Bem vindo a nossa página');
    console.log('Bem vindo a nossa página');
};
const eventClique = () => {
    console.log('Você clicou no botão');
};
// Eventos
const mouseEmCima = () => {
console.log('Mouse está em cima do título');
};