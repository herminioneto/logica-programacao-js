const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]

let obg = 0
let facul = 0
let nEleitor = 0

for (let idade of lista) {
  if (idade >= 18 && idade <= 69) obg++
  else if (idade < 16) nEleitor++
  else facul++
}

console.log("Obrigatório: ", obg)
console.log("Facultativo: ", facul)
console.log("Não Eleitor: ", nEleitor)