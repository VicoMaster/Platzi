/**
    Las interfaces son un tipo de dato personalizado que se utiliza para definir la estructura de un objeto.
    Una interfaz puede tener propiedades y métodos, pero no tiene implementación.

    Característica	                                    |Tipo	| Interfaz
    ----------------------------------------------------|-------|----------
    Inmutable	                                        |Sí	    |No
    Puede agregar nuevas propiedades o métodos	        |No 	|Sí
    Puede usarse para definir el tipo de una variable	|Sí 	|No
    Puede usarse para definir el tipo de una función	|Sí 	|Sí
    Puede usarse para definir el tipo de una clase	    |Sí 	|Sí

 */


// Interfaz básica
interface Persona {
    nombre: string;
    edad: number;
    email: string;
}


// Uso de interfaz con función
interface Animal {
    nombre: string;
    tipo: string;
}

function alimentar(animal: Animal) {
    console.log(`Alimentando a ${animal.nombre}`);
}

const perro = {
    nombre: "Lola",
    tipo: "perro",
};

const gato = {
    nombre: "Miaú",
    tipo: "gato",
};


// Esta función alimentará a cualquier objeto que implemente la interfaz Animal
alimentar(perro);
alimentar(gato);
