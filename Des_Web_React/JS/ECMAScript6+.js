//ECMAScript 6

//Multilinea con comillas francesas
let lorem2 = `otra frase epica
ahora es otra frase epica`;

//Desestructuración de elementos
let person = {
    'name': 'oscar',
    'age': '23',
    'country': 'mx'
}
let {name, age} = person;
console.log(name, age);

//Operador de propagación (spread): nos permite expandir de ciertas situaciones varios elementos
let team1 = ['Malcon', 'Ximena', 'Rodolfo'];
let team2 = ['Salome', 'Doris', 'Fabriccio'];
let educaction = ['David', ...team1, ...team2];


//Asignación de objetos mejorada
let name = 'Andres';
let age = 26;
obj_1 = {name: name, age: age} //antes
obj_2 = {name, age} //ecma


// Arrow Functions
let listOfNames = names.map(function (item){  //antes
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name)); //ecma
const listOfNames3 = (name, age, country) => { //Con varios parametros
    // TODO
}

const listOfname4 = name => { //Cuando solo se pasa un solo parametro
    //TODO
}

const square = num => num * num;  //aginaciones directamente sin llaves

//Promesas
//CREACION:
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        }else {
            reject('ups!!');
        }
    });
}

//Ejecutar promesa con validación de la respuesta:
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


//Clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(2,2));

//import y export

const hello = () => {
    return 'Hello!'
}

export default hello;

//import
import {hello} from './module';

hello();

//Generators
function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//ECMAScript 7
//include
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
if (numbers.includes(7)) {
    console.log('Si se encuentra el valor 7')
} else {
    console.log('No se cuencuentra el valor 7')
}

//potenciar

let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result)

//ECMAScript 8
//Object.entries  -- para crear una matriz con un objeto
const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values  -- para crear un arreglo con solo los valores del objeto
const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.values(data);
console.log(entries);
console.log(entries.length);

//padStart, padEnd  -- para agregar caracteres a un string
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'-----'));
console.log('food'.padEnd(12,'  -----'));