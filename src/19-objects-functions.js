const person = {
  name: "Hermínio",
  lastname: "Neto"
}

// Object.keys: cria um array com todas as chaves do objeto:

console.log(Object.keys(person))

// Object.values: cria um array com todos os valores do objeto:

console.log(Object.values(person))

// Object.entries: cria um array com um array de objetos e valores:

const array = Object.entries(person)

/*
  [['name', 'Hermínio'], ['lastname', 'Neto']]
*/

// Exemplo de aplicabilidade:

const livros = {
  'Livro A': 19.90,
  'Livro B': 20,
  'Livro C': 97
}

const value = Object.values(livros)
const sum = value.reduce((val, acc) => {
  return val + acc
}, 0)

console.log(sum)