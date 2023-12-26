/**
    Las as propiedades de solo lectura son propiedades que solo pueden ser asignadas una vez, 
    en el momento de la creación de la instancia del objeto. 
    Una vez que se ha asignado el valor a una propiedad de solo lectura, no se puede modificar.
 */

interface ValidCrypto {
    name: Array<string>;
}


interface PersonaNew {
    readonly nombreX: string;
    edad: number;
}

interface testPerson {
    readonly nombre: string;
    readonly cosa: string;
}

let personas: Array<PersonaNew>;
personas = [{ nombreX: "VicoMaster", edad: 30 }, { nombreX: "Juan", edad: 25 }];
console.log(personas[0].nombreX);



type PersonaType = {
    readonly nombre: string;
    readonly edad: number;
};


// En constantes no es posible usar readOnly
const person = {
    name: "VicoMasterT",
    age: 30,
};