const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

// forEach: passa por todos os elementos do array:

array.forEach((elemento, posicao) => {
  // console.log(`elemento ${elemento} posição ${posicao}`)
})

// find: retorna o elemento: (forma mais robusta)

const valor = array.find((elemento) => {
  if (elemento === 5) return true
  return false
})

// console.log(valor)

// findIndex: retorna a posição: (forma resumida, quando só há um parâmetro e uma condição)

const index = array.findIndex(elemento => elemento === 5)

// console.log(index)

// some: retorna true se pelo menos um número satisfizer a condição:

const some = array.some(elemento => elemento >= 10)

// console.log(some)

// every: retorna true se todos os elementos satisfizerem a condição:

const every = array.every(elemento => elemento >= 5)

// console.log(every)

// splice: corta o array. o primeiro parâmetro é o início, e o segundo é a quantidade:

const newArray = [1, 25, 34, 4, 5]

// console.log(newArray.splice(2, 2))

// map: altera os valores do array seguindo uma determinada regra:

console.log(newArray.map((elemento) => {
  return elemento * 2
}))

// filter: filtrar os elementos dentro do array:

console.log(newArray.filter((elemento) => {
  return elemento % 2 === 0
}))

// reduce: reduz o array para algum outro elemento:

console.log(newArray.reduce((acumulado, elemento) => {
  return acumulado - elemento
}, 100))