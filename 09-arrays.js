const variavel = 10
let array = [true, false, 1, 2, 3, "string", "sejadev", variavel]
//             0     1    2  3  4      5         6         7

// Quando o array é uma variável, podemos alterar ele por inteiro. Exemplo:

/*
array = [1, 2, 3, 5, 10]
*/

// Podemos também alterar apenas um elemento específico:

array[0] = 1000

// console.log(array)

// Podemos adicionar novos elementos no array de duas formas:
// 1°:

array[8] = 2000

// console.log(array)

// 2° (Quando você não tem certeza quantos elementos existem no array):

array.push(300, "uma string")

// console.log(array)

// É possível remover o último elemento de um array dessa forma:

array.pop()

// console.log(array)

// É possível imprimir o tamanho/número de elementos de um array dessa forma:

let newArray = [12, 20, 45]

// console.log(newArray.length)

// Imprimir a posição e o valor do array:

// let i = 0

// while (i < newArray.length) {
//   console.log(i)
//   console.log(newArray[i])
//   i++
// }

// Ou:

let e = 0

// do {
//   console.log(e)
//   console.log(newArray[e])
//   e++
// } while (e < newArray.length)

// Ou:

// for (let pos = 0; pos < newArray.length; pos++) {
//   console.log(pos)
//   console.log(newArray[pos])
// }

// Formas mais simples:
// for..in:

for (let a in newArray) {
  // console.log(a)
  // console.log(newArray[a])
}

// for..of:

for (let arr of newArray) {
  console.log(arr)
}