"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unirOarrayDos = void 0;
function unirOarray(input) {
    if (Array.isArray(input)) {
        return input.join('');
    }
    else {
        return input.split('');
    }
}
const rtaFunction = unirOarray('testArray');
// Si quisiera usar los metodos de un array tendría que hacer validación de tipos.
if (Array.isArray(rtaFunction)) {
    rtaFunction.reverse();
}
function unirOarrayDos(input) {
    if (Array.isArray(input)) {
        return input.join('');
    }
    else {
        return input.split('');
    }
}
exports.unirOarrayDos = unirOarrayDos;
const STRING_MAYUS = unirOarrayDos(['Hola', 'Soy', 'Un', 'Texto', 'de', 'Arrays']);
const ARRAY_TAMANNO = unirOarrayDos(['Soy String']);
console.log('Quiero un String en Mayuscula : ' + STRING_MAYUS.toUpperCase());
console.log('Quiero un Array: ' + ARRAY_TAMANNO.length);
