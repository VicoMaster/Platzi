/**
    Las as propiedades de solo lectura son propiedades que solo pueden ser asignadas una vez, 
    en el momento de la creación de la instancia del objeto. 
    Una vez que se ha asignado el valor a una propiedad de solo lectura, no se puede modificar.
 */

interface ValidCrypto {
    name: Array<string>;
}


interface Persona {
    nombre: string;
    edad: number;
  }
  
  let personas: Array<Persona>;
  
  //personas = [{ nombre: "VicoMaster", edad: 30 }, { nombre: "Juan", edad: 25 }];



const person = {
    name: "VicoMasterT",
    //readonly age: 30,
};

// La propiedad age solo se puede asignar una vez
//person.age = 31; // Error
