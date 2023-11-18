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