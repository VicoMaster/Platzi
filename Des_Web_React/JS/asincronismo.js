//Callbacks - Función que es pasada a otra función cómo parametro
function function1(callback) {
    setTimeout(() => {
        console.log("Mensaje 1");
        callback();
    }, 1000);
}

function function2() {
    console.log("Mensaje 2");
}

function1(function2);

//Otro ejemplo de callback
function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

//Promesas ejecutadas a la vez
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.log(err);
    })

//Consumir una api con fetch  --- Fetch no lo admite NODE... o al menos no sé aun como hacer que lo admita!
fetch('https://pokeapi.co/api/v2/pokemon/25')
    .then(response => response.json())
    .then(pokemon => {
        console.log(`El pokemon consumido es: ${pokemon.species.name}, felicitaciones lo lograste!!!`);
    })
