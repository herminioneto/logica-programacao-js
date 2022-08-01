// Primeira forma:

let num = 9

while (num <= 10){
  if (num % 2 === 0) console.log(num)
  num = num + 1
}

console.log("AQUI FORA")

// Segunda forma:

num = 9

do {
  console.log(num)
  num++
} while (num <= 10)

// Terceira forma:

for (let i = 9; i <= 10; i = i + 1) {
  console.log(i)
}