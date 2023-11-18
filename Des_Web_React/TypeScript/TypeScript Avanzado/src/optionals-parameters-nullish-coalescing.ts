export const createproduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number,
) => {
    // Recordar para operador ||:
    /*
        0 === false
        '' === false
        false === false
    */
    // Para operador ??  (nullish-coalescing)
    /*
        null === false
        undefined === false
    */
    return {
        id,
        stock: stock || 1,
        isNew: isNew || true
    }
}