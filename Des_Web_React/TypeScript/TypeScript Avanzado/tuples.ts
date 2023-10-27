// Array simple, se puede añadir otro elemento .push y quedará guardado en cualquier indice del array
const prices: (number | string)[] = [1, 2, 3, 4, 5, 'asd'];

// Con una Tupla se especifica que quiero en cada posición
let user: [string, number];
user = ['test', 10];
const [newuser, num] = user;