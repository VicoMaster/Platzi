//Multilinea con comillas francesas
let lorem2 = `otra frase epica
ahora es otra frase epica`;

//Desestructuración de elementos
let person = {
    'name': 'oscar',
    'age': '23',
    'country': 'mx'
}
let {name, age} = person;
console.log(name, age);

//Operador de propagación (spread): nos permite expandir de ciertas situaciones varios elementos
let team1 = ['Malcon', 'Ximena', 'Rodolfo'];
let team2 = ['Salome', 'Doris', 'Fabriccio'];
let educaction = ['David', ...team1, ...team2];