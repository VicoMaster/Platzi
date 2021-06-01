// Funciones Declarativas

function miFuncion() {
    return 3;
}

// Funcion expresion

var miFuncion = function (a, b) {
    return a + b;
}

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

var articulosFiltrador = articulos.filter(function(articulo){
    return articulo.precio <= 500;
});

var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});