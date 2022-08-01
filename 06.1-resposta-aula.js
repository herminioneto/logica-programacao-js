// solução da aula:

const limite = 50 // limite em kg definido
const valorDaMulta = 4 // valor da multa por kg excedido em R$ definido
const pesoDosPeixes = 60 // peso total dos peixes

let excesso // excesso de peixes
let multa // multa total

if (pesoDosPeixes > limite) {
  excesso = pesoDosPeixes - limite
  multa = valorDaMulta * excesso
} else {
  excesso = 0
  multa = 0
}

console.log("Excesso: ", excesso, "kg")
console.log("Multa: ", multa, "R$")