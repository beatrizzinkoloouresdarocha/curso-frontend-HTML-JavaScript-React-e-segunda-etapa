// 1-criando uma função //
function minhaFuncao(){
    console.log("testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmvariavel= function() {
    console.log("função variavel")
}
minhaFuncaoEmvariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("imprimindo alguma coisa");
funcaoComParametro("primeira função");

// 2-return //
const a =10;
const b =20;
const c =30;
const d =40;

function soma(n1, n2){
    return n1 + n2;
}

const resultado =soma(a,b);

console.log(resultado);

console.log(soma(c,d));

// 3- escopo da função //
let y =10

function testandoEscopo(){
    let y =20
    console.log('y dentro da função é: ${y}')
}


testandoEscopo();
    y =15;
console.log('y fora da função é: ${y}');

testandoEscopo();

// 4-escopo animado //
let n = 10;

if (true) {
    let m = 30;

    if (true) {
        let m = 40;
        console.log(m); // Isso imprimirá 40
    }

    // Aqui, m ainda é 30, porque o escopo interno do 'if' não altera o valor de m no escopo externo.
}

// 5- arroy function //
const tesArrow =() => {
    console.log("Esta é uma arrow function")
}

tesArrow();

const parOUimpar=(n) =>{
    if(n % 2 === 0){
        console.log("Par")
        return
    }

    console.log(impar);
}

parOUimpar(5)

parOUimpar(10)

// 6- mais sobre arrow functions //
//const raizQuadrada = (x) => {
    //return x * x;
//}

//console.log(raizQuadrada(4));

//const raizQuadrada2 = (x) => x * x;

//console.log(raizQuadrada2(5));

//console.log(raizQuadrada(12));

//const helloworld = () => console.log("Hello world");

//helloworld();

