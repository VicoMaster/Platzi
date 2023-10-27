(() => {
    const login = (data: { email: string, password: number }) => {
        console.log(data.email, data.password);
    }

    // login('nico@nico.co', '12121212');
    login({
        email: 'nico@nico.co',
        password: 12121212
    });

    type Sizes = 'S' | 'M' | 'L' | 'XL';

    const products: any[] = [];

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {
        products.push(data);
    }

    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12
    });
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);
})();



// OBJETOS COMO TIPOS Y FUNCIONES
(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    };

    const products: Product[] = [];  // Se declara un array vacio de tipo Product

    const addProduct = (data: Product) => {
        products.push(data);
    }

    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12
    });
    addProduct({
        title: 'Pro2',
        createdAt: new Date(1993, 1, 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);
    products.push({
        title: 'Prod3',
        createdAt: new Date(1992, 1, 1),
        stock: 12,
        size: 'XL'
    });
})();