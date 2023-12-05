/**
    Un enum es un tipo de dato que define un conjunto de valores constantes. 
    Los enums se pueden utilizar para representar valores que no cambian.
 */

enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

// Se crea el tipo de dato User con 2 propiedades
type User = {
    username: string;
    role: ROLES;
}

// Creamos un const de tipo User
const vicoUser: User = {
    username: 'VicoMaster',
    role: ROLES.ADMIN
}