// 1-Variáveis //
let nome = "Beatriz";

console.log(nome);

nome= "Beatriz Zinko"

console.log(nome);

const idade=22;

console.log(idade);

// 2-idade =32;

console.log(typeof nome);

console.log(typeof idade);

// Mais sobre variáveis //
// let 2teste ='invlido'//
//let @2teste ="invalido"//

let a=10 ,
b=20,
c=30;

console.log(a,b,c);

const nomecompleto= "Beatriz Zinko Loures da Rocha";

const nomeCompleto="Ana Paula";

console.log(nomecompleto);

console.log(nomecompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// 3-promt //
//const age = prompt("Digite a sua idade:");

//console.log(`Você tem ${age} anos.`);

// 4-alert //
//alert("testando");

//const z = 10;

//alert(`o número é  ${z}.`);

// 5-Math //
//console.log(Math.max(5 ,2 ,10));

//console.log(Math.floor(5.14));

//console.log(Math.ceil(5.14));

// 6- console //
//console.log("teste!");

//console.error("erro!");

// 7- if //
const  m =10;

if(m < 5){
    console.log("M é maior que  5!");
}

const user = "João"

if(user == "João"){
    console.log("Olá joão!");
}

if(user == "Maria"){
    console.log("Olá Maria!");
}

console.log(user === "João");

console.log(user === " Maria");

// else //
const leggedIn = false

if(leggedIn){
    console.log("Esta autenticado!")
  }else{
    console.log("Nâo esta autenticado")
}


const q =10
const w =15

if(q >5 && w >20 ){
    console.log("Números mais altos");
    }else{
        console.log("Os números não são os mais altos");
    }

// 9-else if //
if (1 > 2){
    console.log("teste")
}else if(2 > 3){
    console.log("teste 2")
}else if(5 >1){
    console.log("Agora sim!")
}

const userName="Beatriz"
const  userage= 23

if(userName ==="josé"){
    console.log("Bem vindo josé!")
}else if(userName === "Beatriz" && userAge === 23){
    console.log("Olá Beatriz, voçê têm 23 anos!")
}else{
    console.log("Nenhuma condiçâo aceita!")
}