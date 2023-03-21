let num = [5, 8, 2, 9, 3]
// A posição do .push() e .sort() influência no código
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor do primeiro vetor é ${num[3]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
