function ola () {
  console.log("OLA")
}

ola()

// Arrow Function:

const arrowOla = () => {
  console.log("ARROW OLA")
}

arrowOla()

// Se a função for simples ao ponto de ter apenas uma execução,
// pode-se remover as chaves e escrever tudo na mesma linha, e o
// return fica implícito:

const soma = (A, B) => A + B

// Se a função tiver apenas um parâmetro, não precisa dos parênteses:

const ePar = num => num % 2 === 0

console.log(soma(5, 20))

if (ePar(9)) {
  console.log("É par")
} else {
  console.log("É ímpar")
}