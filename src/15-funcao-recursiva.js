// Funções recursivas chamam a si mesmos várias vezes até executar o que está sendo pedido.
// Exemplo do exercício de fatorial anterior:

function fatorial (n) {
  if (n <= 2) return n
  return fatorial(n-1) * n
}

/*
  Na prática:

  n = 5
  fatorial(5) = fatorial(4) * 5

  n = 4
  fatorial(4) = fatorial(3) * 4

  n = 3
  fatorial(3) = fatorial(2) * 3

  n = 2
  fatorial(2) = 2

*/

const num = 5
const R = fatorial(num)

console.log(R)