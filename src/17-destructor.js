// O destructor facilita na hora de selecionar vários elementos com mesmo tipo de um ou mais objetos:

const pessoa = {
  nome: "Hermínio",
  sobrenome: "Neto",
  idade: 21,
  senha: "1234",
  sexo: "Masculino"
}

const {nome, idade} = pessoa
// const pessoa = pessoa.nome
// const idade = pessoa.idade

console.log(nome)
console.log(idade)

const pessoaAtualizada = {
  ...pessoa,
  idade: 25,
  senha: "5678"
}

console.log(pessoaAtualizada)

// Também funciona com arrays:

const array = [10, 20, 3, 4]

const [a, b] = array

console.log(a)
console.log(b)

const newArray = [...array, 5, 6]

console.log(newArray)