"use strict";
/**
    Las interfaces son un tipo de dato personalizado que se utiliza para definir la estructura de un objeto.
    Una interfaz puede tener propiedades y métodos, pero no tiene implementación.
 */
function alimentar(animal) {
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
