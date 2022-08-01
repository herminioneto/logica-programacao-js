function Pessoa(nome, sobrenome) {
  let pessoa = {
    nome,
    sobrenome
  }

  pessoa.nomeCompleto = `${nome} ${sobrenome}`

  return pessoa
}

const pessoaA = Pessoa("Hermínio", "Neto")
const pessoaB = Pessoa("José", "Fortes")

console.log(pessoaA, pessoaB)
console.log("Nome da Pessoa A:", pessoaA.nomeCompleto)