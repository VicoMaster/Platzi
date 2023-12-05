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

 **/


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


/**
    Una interfaz se puede extender para agregar nuevas propiedades o métodos a esa interfaz. 
    Para extender una interfaz, se usa la palabra clave extends
 **/
interface AnimalId extends Animal {
    age: number;
    rh: string;
    home: boolean;
}

const PIMIENTA: AnimalId = {
    nombre: "Pimienta",
    tipo: "Perro",
    age: 7,
    rh: "A+",
    home: true,
}

console.log(PIMIENTA);
