// 1-arrays //
const lista= [1,2,3,4,5];

console.log(lista);

console.log(typeof lista);

const itens= ["Beatriz",true,2,4,12,[]]

console.log(itens);

// 2- mais sobre arrays //
const arr =["a","b","c","d","d"]

console.log(arr["0"]);

console.log(arr["2"]);

// 3-propriedades //

const numbers =[5,3,4]

console.log(numbers.length);

console.log(numbers["length"])

const myName = "Beatriz";

console.log(myName.length);

// 4-métodos //
const otherNumber =[1,2,3]

const allNumbers = numbers.concat(otherNumber)

console.log(allNumbers);

const text = "algum texto";

console.log(text.toLocaleLowerCase);


// 5- criando e deletando propriedades//
const car ={
    engine:2.0,
    brand:"VW",
    model:"Tinguin",
    km:20000
};

console.log(car);

car.doors=4

console.log(car);

delete car.km;

console.log(car);

// 6-objetos //
const person = {
    name: "Beatriz",
    age: 23,
    job: "Programadora",
    address: {
        street: "Rua das Flores",
        number: 123,
        city: "São Paulo",
        state: "SP",
        postalCode: "12345-678"
    },
    skills: ["JavaScript", "HTML", "CSS", "React"],
    isEmployed: true,
    introduce: function() {
        return `Olá, meu nome é ${this.name} e eu sou uma ${this.job}.`;
    }
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

console.log(person.address.city);

console.log(person.skills);

console.log(person.introduce());

// 7-mais sobre objetos //
const obj ={
    a:"teste",
    b:true
}

console.log(obj instanceof Object);

//8- mutação //
const a={
    name:"Beatriz"
}

a.age= 31;

console.log("a");
console.log("b");

delete b.age;

console.log(a);
console.log(b);

// 10- loop em array //
const users =["Beatriz","ana","maria"]

for(let i =0;i< users.length;i++){
    console.log('listando o usúario ${usúario{i}}')
}