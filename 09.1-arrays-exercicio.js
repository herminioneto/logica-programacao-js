// Dado um array com X números, encontrar a média desse números.
// Média: (Soma dos elementos) / Tamanho

let array = [1, 3, 5, 6, 10]
let soma = 0

for (let i = 0; i < array.length; i++) {
  soma += array[i]
}

// console.log(soma/array.length)

// Solução da aula:

let numbers = [10, 20]
let sum = 0

for (let num of numbers) {
  sum = sum + num
}

const media = sum / numbers.length

console.log(media)