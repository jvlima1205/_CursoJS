var idade = 68

console.log('Você tem: ' + idade)
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade >= 67){
    console.log('Vota opcional')
}
else{
    console.log('Vota obrigatório')
}