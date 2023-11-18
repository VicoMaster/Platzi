function recibeMuchosParameters() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    params.forEach(function (elemento) {
        console.log(elemento);
    });
}
recibeMuchosParameters('1', '2', '3', '4', '6');
console.log('Esto es un cambio desde src');
