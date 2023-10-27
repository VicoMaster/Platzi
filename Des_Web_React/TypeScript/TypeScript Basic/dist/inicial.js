"use strict";
function retornaCosaLoca(params) {
    const COSA_LOCA = `Esto es una cosa loca: ${params}`;
    if (params.search('@')) {
        console.log('No puedes @');
    }
    return COSA_LOCA;
}
let binNumber = 0b110; // Binary number
let arrayMix = ['hola', true];
// No usar any
let myDinamicVar;
myDinamicVar = 0;
myDinamicVar = '';
myDinamicVar = [];
myDinamicVar = 'Hola';
// Forzar tipado
const noDinamic = myDinamicVar.toLowerCase();
const noDinamic2 = myDinamicVar.toFixed(); // Genera error porque no es posible generar toFixed de un String
console.log(noDinamic);
console.log(noDinamic2);
console.log(retornaCosaLoca('Andrés @'));
// Union Types
(() => {
    let userId;
    userId = 1212;
    userId = 'asdsad';
})();
// Literal Types = solo conjunto de valores validos
let shirtSize;
// Undefined y null
// Es posible que en algún momento queramos validar si es diferente de estos 2 y el valor sea numerico.
let myNumber = null;
console.log(typeof myNumber);
