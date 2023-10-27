var numeros = [56, 78, 77, 920, 388, 9999, 82080]
console.log(numeros)

var matrix = [
    ['ICarly', 2011, 10],
    ['Os Fet de Every Place', 2009, 10],
    ['Doug', 1999, 8.7]
]

console.log(matrix)
console.log(matrix[0][2])
console.log(matrix[2][1])

console.log('Antes: ' + numeros)
numeros[3] = 'hora do lanche'
console.log('Depois: ' + numeros)

console.log('Antes: ' + matrix)
matrix[2][1] = 1800
console.log('Depois: ' + matrix)

var numArray = [2, 3, 6, 7, 45, 86]
console.log(numArray)

let receba = numArray.toString()

console.log(receba)

let testeJoin = numArray.join(' ')
console.log(testeJoin)

console.log(numArray)

let  retiraUltimoElemento = numArray.pop()
console.log(retiraUltimoElemento)
console.log(numArray)

let novaInformacao = numArray.push('kiwi')
console.log(numArray)
console.log(novaInformacao)

//removendo inicio da array
let retiraInicio = numArray.shift()
console.log(retiraInicio)
console.log(numArray)

let inserirNoInicio = numArray.unshift('bombastit fantastic')
console.log(inserirNoInicio)
console.log(numArray)
