function retornaCosaLoca(params: string) {
    const COSA_LOCA: string = `Esto es una cosa loca: ${params}`;
    if (params.search('@')) {
        console.log('No puedes @');
    }
    return COSA_LOCA;
}

let binNumber = 0b110;  // Binary number
let arrayMix: (number | string | boolean)[] = ['hola', true]

// No usar any
let myDinamicVar: any;
myDinamicVar = 0;
myDinamicVar = '';
myDinamicVar = [];
myDinamicVar = 'Hola';

// Forzar tipado
const noDinamic = (myDinamicVar as string).toLowerCase();
const noDinamic2 = (<number>myDinamicVar).toFixed();  // Genera error porque no es posible generar toFixed de un String
console.log(noDinamic);
console.log(noDinamic2);


console.log(retornaCosaLoca('Andrés @'));

// Union Types
(() => {// Function autoejecutada
    let userId: string | number;
    userId = 1212;
    userId = 'asdsad'
})();



// Alias Type
type allowedTypes = (number | string | boolean);

// Literal Types = solo conjunto de valores validos
let shirtSize: 'S' | 'M' | 'L' | 'XL';

// Undefined y null
// Es posible que en algún momento queramos validar si es diferente de estos 2 y el valor sea numerico.
let myString: string | undefined | null;
console.log(typeof myString);

let hello = 'hola';
hello += myString?.toLocaleLowerCase() || 'noBody';