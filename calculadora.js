///NÍVEL I

function adicionar (a = 0 ,b = 0,  ) {
    const resultado = a + b;
    return resultado;
}

function subtracao (a = 0 ,b = 0) {
    const resultado = a - b;
    return resultado;
}

function multiplicacao (a = 0 ,b = 0) {
    const resultado = a * b;
    return resultado;
}

function divisao (a = 0 ,b = 0) {
    const resultado = a / b;
    return resultado;
}

//NÍVEL II

console.log ("-------------- Teste de Operações / Calculador --------------")

console.log (adicionar(2, 10)); //12
console.log (subtracao(2, 10)); //-8
console.log (multiplicacao(2, 10)); //20
console.log (divisao( 2,2)); //erro


//NÍVEL III

console.log ("-------------- Teste de Funções Extras --------------")


function quadradoDoNumero (a = 0) {
    const resultado = multiplicacao (a , a);
    return resultado;
}

function mediaDeTresNumeros (a , b , c){
    const resultado = adicionar(a , b) + c;
    const total = divisao( resultado , 3)
    return total;
}

function calculaPorcentagem (a, valorPorcentagem) {
    const porcentagem = divisao(valorPorcentagem , 100 );
    const resultado = multiplicacao(porcentagem , a )
    return resultado;
}

function geradorDePorcentagem (a , b){
    const valorA = divisao(b , 100);
    const resultado = divisao(a, valorA)
    return resultado;
}



console.log (quadradoDoNumero(2)); // 4
console.log (mediaDeTresNumeros(2 ,10 ,2)); //4.66
console.log (calculaPorcentagem(300 , 15)); // 45
console.log (geradorDePorcentagem (2 ,200)); // 1

