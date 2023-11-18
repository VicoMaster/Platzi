function recibeMuchosParameters(...params: string[]) {
    params.forEach(elemento => {
        console.log(elemento);

    });
}
recibeMuchosParameters('1', '2', '3', '4', '6',);
console.log('Esto es un cambio desde src 6');