function unirOarray(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('');
    } else {
        return input.split('');
    }
}

const rtaFunction = unirOarray('testArray');

// Si quisiera usar los metodos de un array tendría que hacer validación de tipos.
if (Array.isArray(rtaFunction)) {
    rtaFunction.reverse()
}

// Si quisiera manejar los metodos correspondientes a lo que devuelve la función se exporta de la siguiente manera


export function unirOarrayDos(input: string | string): string[];
export function unirOarrayDos(input: string | string[]): string;

export function unirOarrayDos(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('');
    } else {
        return input.split('');
    }
}

const STRING_MAYUS = unirOarrayDos(['Hola', 'Soy', 'Un', 'Texto', 'de', 'Arrays'])
const ARRAY_TAMANNO = unirOarrayDos(['Soy String']);

console.log('Quiero un String en Mayuscula : ' + STRING_MAYUS.toUpperCase());
console.log('Quiero un Array: ' + ARRAY_TAMANNO.length);
