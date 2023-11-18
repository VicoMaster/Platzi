"use strict";
// Se utilza para funciones que nunca van a termina como un While
const withoutEnd = () => {
    while (true) {
        console.log('Finalizará con Node, posiblemente si se ejecuta en el navegador se bloquee');
    }
};
const fail = (message) => {
    throw new Error(message);
};
const example = (input) => {
    if (typeof input === 'string') {
        return 'Es un String';
    }
    else if (Array.isArray(input)) {
        return 'Es un Array';
    }
    return fail('not match');
};
console.log(example('hola'));
console.log(example([1, 2, 3, 4, 5]));
console.log(1212); // Detiene la ejecución por retornar throw
console.log('Hola despues del fail');
console.log('Hola despues del fail');
