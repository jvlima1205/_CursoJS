var num = [5, 8, 2, 9, 3]
num[4] = 6
num.push(7)

console.log(num)
console.log(`Vetor: ${num}`)
console.log(`Vetor Reorganizado ${num.sort()}`)
console.log(`Possui ${num.length} elementos`)
console.log(`O primeiro valor do vetor é: ${num[0]}\n`)

let pos = num.indexOf(81)
if(pos == -1){
    console.log('Não encontrado\n')
}else{
 console.log(`O valor está na posição ${pos}\n`)
}

/* 
Não faz isso
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6]) */

// Faz isso
for(let c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

console.log('\n')
// Forma alternativa para percorrer o array, otimizada
// Para cada posição dentro de num -> mostrar num[pos]
for(let pos in num){
    console.log(num[pos])
}