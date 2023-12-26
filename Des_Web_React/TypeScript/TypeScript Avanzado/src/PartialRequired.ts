/**
    interface Product {
    title: string;
    price: number;
    category: string;
    size?: string;
    }

    Partial
    Nos permite colocar todos los parámetros de una interface como opcionales, 
    sin necesidad que colocar ? parámetro por parámetro.

    Required
    Nos permite colocar todos los parámetros de una interface como obligatorios.

    type UpdateProduct = Partial<Product>
    type StrictProduct = Required<Product>
*/
