function fatorial (n) {
  let fatorial = 1
  while (n >= 2) {
    fatorial = fatorial * n
    n--
  }
  return fatorial
}

/*
  O que está acontecendo na prática:

  n = 5 (exemplo)
  fatorial = 5

  (volta pro while):

  n = 4
  fatorial = 5 * 4

  n = 3
  fatorial = 5 * 4 * 3

  n = 2
  fatorial = 5 * 4 * 3 * 2

  n = 1
  return fatorial

*/

const number = 5
const resposta = fatorial(number)

console.log(resposta)