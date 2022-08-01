function ola () {
  return "olá"
  console.log("não chega aqui")
}

ola()

const variavel = ola()

console.log(variavel)

// Operações:

function soma (A, B) {
  return A + B
}

function subtracao (A, B) {
  return A - B
}

function calculadora (tipo) {
  const A = 1
  const B = 2
  if (tipo === "soma") return soma(A, B)
  else if (tipo === "subtracao") return subtracao(A, B)
}

const result = calculadora("subtracao")
console.log(result)

// Exercício da aula (minha solução):

function parImpar () {
  const num = 4
  if (num % 2 === 0) return("É par")
  else return("Não é par")
}

console.log(parImpar())

// Solução da aula:

function par (numero) {
  return numero % 2 === 0
}

const ePar = par(3)
console.log(ePar)

// Mostrar os numeros pares entre 0 e 100:

for (let i = 0; i <= 100; i++) {
  if (par(i)) console.log(i)
}