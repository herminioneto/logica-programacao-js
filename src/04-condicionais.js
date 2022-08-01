const num = 6
const cond = num % 2 === 0

if (cond) {
  console.log("É par")
} else {
  console.log("É ímpar")
}

// Forma de se escrever em uma linha só a mesma comparação:

// pergunta ? console.log(true) : console.log(false):

num % 2 === 0 ? console.log("É par") : console.log("É ímpar")



// Igualdade estrita:

const num1 = 10
const num2 = Number("10")

if (num1 === num2) {
  console.log("É igual")
  console.log(num1 + num2)
} else {
  console.log("Não é igual")
  console.log(num1 + num2)
}