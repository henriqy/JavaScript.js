//Declaracao de funcao

//1) declara a funcao

function imprimeTexto(texto){
    console.log(texto);

}

//2) Executa a funcao (1 ou + vezes)

imprimeTexto(soma());

function soma(){
    return 2+2;
}

//Parametros de funcao

/*function sima(numero1, numero2){
    return numero1 + numero2;

}*/
console.log(13, 22);

function nomeIdade(nome, idade){
    return 'meu nome eh ${nome} e minha idade eh ${idade}';

}
console.log(nomeIdade('opa', 19));

function soma(numero1, numero2){
    return numero1 + numero2;

}

function multiplica(numero1, numero2){
    return numero1 * numero2;

}

console.log(multiplica(soma(3,2), soma(6,4)));