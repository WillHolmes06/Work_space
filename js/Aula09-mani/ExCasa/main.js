let numeros = [17, 43, 8, 4, 97, 56, 29]


let parImpar = numeros.filter((num) => {
    return num % 2 == 0
})

console.log(parImpar);


let numeros2 = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61 ]

let myFunc = numeros2.filter((num2) => {
    return num2 >= 20 && num2 <= 80
})

console.log(myFunc);