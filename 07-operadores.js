/*
Operadores Lógicos:

OU: || - A condição é verdadeira se UM ou OUTRO for verdadeiro.
E: && - A condição é verdadeira de TODOS forem verdadeiros.

*/

const idade = 6

if (idade === 5 || idade === 6 || idade === 7) {
  console.log("Infantil A")
} else if (idade >= 8 && idade <= 11) {
  console.log("Infantil B")
} else if (idade >= 12 && idade <= 14) {
  console.log("Juvenil A")
} else if (idade >= 15 && idade <= 17) {
  console.log("Juvenil B")
} else {
  console.log("Adulto")
}