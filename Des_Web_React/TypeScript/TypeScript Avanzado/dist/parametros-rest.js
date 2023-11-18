"use strict";
function recibeMuchosParameters(...params) {
    params.forEach(elemento => {
        console.log(elemento);
    });
}
recibeMuchosParameters('1', '2', '3', '4', '6');
console.log('Esto es un cambio desde SRC');
