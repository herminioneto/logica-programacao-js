// alternativa simplificada:

const limite = 50 // limite em kg definido
const valorDaMulta = 4 // valor da multa por kg excedido em R$ definido

let pesoDosPeixes = 60 // peso total dos peixes

// usando a maneira simplificada de escrever em uma linha:

let excesso = pesoDosPeixes > limite ? pesoDosPeixes - limite : 0

let multa = excesso * valorDaMulta

console.log("Excesso: ", excesso, "kg")
console.log("Multa: R$", multa)