// variables
var nombre = 'Andres', apellido = 'Rivera';

// Interpolar variables para concatenar

var nombreCompleto = `${nombre} ${apellido}`;


//Calculo valores decimales
var precioDeVino = 200.3;
var total = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(2); // para 2 decimales
var total2 = parseFloat(totalStr);

// Funciones Declarativas

function miFuncion() {
    return 3;
}

// Funcion expresion

var miFuncion = function (a, b) {
    return a + b;
}

// acortando funciones
//funcion larga
const esMayor = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}
//acortando
const esMayor = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD;
}
//acortando aun más cuando hay un solo parametro
const esMayor = persona => {
    return persona.edad >= MAYORIA_DE_EDAD;
}
// si la funcion solo retorna, se puede recortar
const esMayor = persona => persona.edad >= MAYORIA_DE_EDAD;
// desestructurando el objeto
const esMayor = ({ edad }) => edad >= MAYORIA_DE_EDAD;




// Arrow functions
const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')

//Scope
var miNombre = "Andrés";

function nombre() {
    var miApepllido = "Rivera Lozano";
    console.log(miNombre + " " + miApepllido);
}

nombre();

//hoisting
saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Aaron";

//IF

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function (user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op3) {
            console.log("el usuario GANO con " + op1)
        } else if (user === op2 && cpu === op1) {
            console.log("el usuario GANO con " + op2)
        } else if (user === op3 && cpu === op2) {
            console.log("el usuario GANO con " + op3)
        } else {
            console.log("La CPU Gano!!")
        }
    } else if (user === cpu) {
        console.log("Empate")
    }
};

resultado(op1, op3) //el usuario GANO con Piedra``


//validación en linea
const MAYORIA_DE_EDAD = 18;
return persona.edad >= MAYORIA_DE_EDAD



// IF CORTO
condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí, soy un uno" : "No, no soy uno";

// Switch
/* Piedra: 0, papel: 1 o tijera: 2
 parámetros: p = persona, pc = computadora */
function jugar(p, pc) {
    switch (true) {
        case p === pc:
            console.log("Empate");
            break;
        case (p === 0 && pc !== 1) || (p === 1 && pc !== 2) || (p === 2 && pc !== 0):
            console.log("Ganas");
            break;
        default:
            console.log("Pierdes");
            break;
    }
}
//Array
var frutas = [];
var masFrutas = frutas.push("Uvas"); //agregar
var ultimo = frutas.pop("Uvas"); // Eliminar uvas EL ULTIMO ELEMENTO
var nuevaLongitud = frutas.unshift("Durazno"); // agregar elemento de primeras
var borrarFruta = frutas.shift(); //Elimina el primer elemento del array
var index = frutas.indexOf("Manzana");


//for
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno) {
    console.log(`Hola, ${alumno}`);
}

for (i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}: ${frutas[i]}`);
}

//for corto
for (var alumno of estudiantes) {
    saludarEstudiantes(alumno);
}



// while
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}


//Recursividad: Nos sirve para iterar elementos sin usar ciclos for o while. 
//Sirve para hacer más simples los códigos confusos o complejos con usos de ciclos.
//En cada llamada de la función se genera una nueva tarea dentro del Stack, luego cada una se libera sumando o haciendo la operación indicada con el stack anterior.
//El caso base es donde se terminará la recursividad o el bucle de instancias
const conteoRegresivo = (a) => {
    if (a < 0) return  // el return termina la ejecución
    console.log(a)
    return conteoRegresivo(a - 1)
}
//ejemplo de recursividad con una aplicación de un llamado a una api con metodo http, usando librería axios.
const axios = require('axios')
const llamarApi = async (url, llamados = 0) => {
    try {
        const {data} = await axios.get(url)
        console.log(data);
        return data
    } catch (e) {
        if (llamados > 5) {
            return llamarApi(url, llamados + 1)
        }
    }
}
llamarApi('https://jsonplaceholder.typicode.com/users');
//ejemplo de recursividad con factorial
function factorial(n){
    if (n === 1){
        return 1;
    }
    return n * factorial( n - 1)
}
//ejemplo recursividad con factorial guardando el resultado en cache (creando variable en objeto window) para ahorrar computo "Memoizando"
function factorial_memoizando(n){
    if(!this.cache){
        this.cache = {}
    }
    if(this.cache[n]){
        return this.cache[n]
    }
    if(n ===1){
        return 1
    }
   this.cache[n] = n * factorial(n-1)
   return this.cache[n]
}

//Objeto   clave-valor
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
}
miAuto.marca

function imprimirNombre({ nombre }) {
    console.log(nombre.toUpperCase());
}

// Desestructurar objetos 
// var nombre = persona.nombre - es iugal a:
var { nombre } = persona //persona es un objeto
//Este ejemplo es cuando se desea crear una variable con el mismo nombre de una clave


function cumpleaños(persona) { // Esta funcion devuelve un objeto con el valor de edad incrementado
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

// Funcion constructora
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = año;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);

// Metodo recorrido Arrays
var articulos = [
    { nombre: 'Bici', precio: 1000 },
    { nombre: 'Laptop', precio: 1500 },
    { nombre: 'Libro', precio: 2000 },
    { nombre: 'TV', precio: 100 },
    { nombre: 'Celular', precio: 70 },
    { nombre: 'Audifonos', precio: 30000 },
];

var articulosFiltrador = articulos.filter(function (articulo) {
    return articulo.precio <= 500;
});

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});

// Crar nuevo array
//version completa recortada
const pasarAlturaCMS = persona => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

//version corta
const pasarAlturaCMS = persona => ({ ...persona, altura: persona.altura * 100 });

//Reducir un array a un valor
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;
var totalDeLibros = personas.reduce(reducer, 0); //Suma todos los libros en los objetos en el array

//reduce()
//arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
/**
La función reductora recibe cuatro argumentos:

Acumulador (acc)
Valor Actual (cur)
Índice Actual (idx)
Array (src)
 */
const array1 = [1, 2, 3, 4, 5, 6, 7];
const reducer = (accumulator, currentValue) => {
    console.log(`${accumulator} | ${currentValue}`)
    return accumulator + currentValue;
}

console.log(array1.reduce(reducer,2));


// .sort()
/**
 Para comparar números en lugar de strings, la función de comparación puede simplemente restar b de a. La siguiente función ordena el array de modo ascendente:
 */
var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );  // [ 1, 5, 40, 200 ]

/** El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. 
 * .map  SINTAXIS
    var nuevo_array = arr.map(function callback(currentValue, index, array) {
        // Elemento devuelto de nuevo_array
    }[, thisArg])
 * callback: Función que producirá un elemento del nuevo array, recibe tres argumentos:
 * currentValue: El elemento actual del array que se está procesando.
 * index: El índice del elemento actual dentro del array.
 * array: El array sobre el que se llama map.
 * thisArg: Opcional. Valor a usar como this al ejecutar callback.
 */
const lista1 = [6,4,9,1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1, 6];
const lista1Count = {};
lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);
console.log(lista1Count);
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
const moda = lista1Array[lista1Array.length - 1];
console.log(moda);


//Clases en JS
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    //retorna = return this
}
//agregar una función al prototipo persona
Persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`);
}
var sacha = new Persona('Sacha', 'Lifszync');
sacha.saludar();
//Función interna que devuelve un boolean
Persona.prototype.SoyAlto = function () {
    return this.altura > 1.8;
}
sacha.SoyAlto(); //return false

//HERENCIA PROTOTIPAL:
//Prototipo = clases en javascript, de la manera antigua
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () { } // funcion que no hace nada
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}
//EJEMPLO PRACTICO PROTOTIPO
function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
heredaDe(Desarrollador, Persona); // se pone antes de la función desarrollador para pisarlo.
Desarrollador.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
}

//ECMA-2015 Clases
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}
//herencia con ecma
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    //recibe una función como parametro
    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`hola, me llamo ${nombre} ${apellido} y soy desarrollador.`)
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

//Asincronismo y callbacks (con JQuery para la petición)
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) {
            callback();
        }
    })
}
//callbacksheall
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7);
                    });
                });
            });
        });
    });
});

//Promesas
//Declarar una promesa:
esto = new Promise(function (resolve, reject) {
    //...
}).then(valor => {
    //...
}).catch(err => {
    //...
})
//ejemplo de Promesa
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $//código jquery
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}
function onError(id) {
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}
obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(personaje.name)
    })
    .catch(onError)


// Promesas encadenadas 
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}
// los request se hacen en serie y no paralelo
obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .then(personaje => {
        console.log(`El personaje 5 es ${personaje.name}`)
        return obtenerPersonaje(6)
    })
    .then(personaje => {
        console.log(`El personaje 6 es ${personaje.name}`)
        return obtenerPersonaje(7)
    })
    .then(personaje => {
        console.log(`El personaje 7 es ${personaje.name}`)
    })
    .catch(onError)

//Crear promesas con un array y .map
var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(function (id) {
    return obtenerPersonaje(id)
})
//Expresado en arrow function
var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(id => obtenerPersonaje(id))
//Promesas en paralelo
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

//Async-await
async function obtenerPersonajes() {
    var ids = []
    for (let i = 1; i <= 10; i++) {
        ids.push(i)
    }
    var promesas = ids.map(id => obtenerPersonaje(id))

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()


//Generar una secuencia de numeros aleatorios entre 0 y 3.9
//Generar un array con un tamaño y valores definidos
function generarSecuencia() {
    this.secuencia = new Array(10).fill(0).map(() => Math.floor((Math.random() * 4)))
}

// crear un objeto con valores de nombre iguales.
this.colores = {

    celeste,
    violeta,
    naranja,
    verde
    /*forma clasica
    celeste: celeste,
    violeta : violeta,
    naranja : naranja,
    verde : verde
    */
}


//Manejando Fechas
function diasEntreFechas(fecha1,fecha2){
    const unDia = 1000*60*60*24
    const diferencia = Math.abs(fecha1- fecha2)
    return Math.floor(diferencia/unDia)
}
const hoy= new Date()
const nacimiento =new Date(1996,2,14)
/** 
También existen métodos para obtener un valor de la fecha en específico. Estos métodos son:
getFullYear()
getMonth()
getDate()
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getTime()
getDay()
Date.now()
 **/

// Closures
const miContador = (function() {
    let _contador = 0;

    function incrementar(){
        return _contador++;
    }

    function decrementar(){
        return _contador--;
    }

    function valor(){
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();
miContador.incrementar();
miContador.valor();

//otro ejemplo Closures
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

//otro más de closures
const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    }
    return displayCount;
};
const myCount = buildCount(1);
myCount();
myCount();
myCount();

//clousure y variables privadas
const person = () => {
    let saveName = "Name"; //esta es la var privada
    return {
      getName: () => saveName,
      setName: (name) => {
        saveName = name;
      },
    };
  };
  
  const newPerson = person();
  console.log(newPerson.getName());
  newPerson.setName('Edward');
  console.log(newPerson.getName());

//get y set en closures
const person = () => {
    let name = 'Name'
  
    return {
      get name () {
        return name
      },
  
      set name (value) {
        name = value
      }
    }
}

const newPerson = person()
console.log(newPerson.name)
newPerson.name = 'Jousmo'
console.log(newPerson.name)

//blind
const pablo = {
	nombre: 'Pablo',
	apellido: 'Andrés',
}
const mariela = {
	nombre: 'Mariela',
	apellido: 'Riesnik',
}

function saludar() {
	console.log(`Hola, mi nombre es ${this.nombre}`)
}
const saludarAPablo = saludar.bind(pablo)
const saludarAMariela = saludar.bind(mariela)
saludarAPablo()
// Hola, mi nombre es Pablo
saludarAMariela()
// Hola, mi nombre es Mariela
saludar.call(pablo, 'Hola cheeee!!')
// Hola cheeee!!, mi nombre es Pablo
saludar.apply(pablo, ['Hola mi querido'])
// Hola mi querido, mi nombre es Pablo
