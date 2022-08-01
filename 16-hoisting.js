// HOISTING: O JS armazena o código na memória, o que faz com que você consiga chamar uma função
// antes mesmo dela ser declarada. E isso se chama hoisting. Exemplo:

ola()

function ola() {
  console.log("OLA")
}