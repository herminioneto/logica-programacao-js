const pessoa = {
  nome: "Hermínio",
  idade: 20,
  notas: [8, 9, 10],
  curso: "Ciência da Computação",
  endereco: {
    rua: "Rua X",
    numero: 100,
    localizacao: {
      cidade: "Teresina",
      estado: "Piauí"
    }
  }
}

console.log(pessoa["idade"])
console.log(pessoa["endereco"])
console.log(pessoa["endereco"]["localizacao"])

// Outra forma de imprimir:

console.log(pessoa.notas[2])
console.log(pessoa.endereco.localizacao)

// Podemos colocar um objeto dentro de um array:

const array = [pessoa]
console.log(array)