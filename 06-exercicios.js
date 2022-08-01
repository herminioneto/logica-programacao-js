// minha solução:

let numPeixes = 52
let excesso = numPeixes - 50
let multa = 4 * excesso

// excesso > 0 ? console.log(`Houve um excesso de ${excesso} kg, e a multa será de ${multa} reais.`) : console.log("Não pagará multa")

if (excesso > 0) {
  console.log(`Houve um excesso de ${excesso} kg, e a multa será de ${multa} reais.`)
} else {
  console.log("Não pagará multa")
}