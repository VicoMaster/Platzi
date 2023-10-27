(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.stock);
    console.log(producto1.size);

    const createProductToJsonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes  // Atribuo opcional
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
    console.log(producto2.size);
})();


// Especificando el retorno:
(() => {
    const calcTotal = (prices: number[]): string => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString();
    }

    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    }

    printTotal([1, 2, 1, 1, 1]);
})();