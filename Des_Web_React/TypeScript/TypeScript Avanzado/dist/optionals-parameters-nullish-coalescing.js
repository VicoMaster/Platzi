"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createproduct = void 0;
const createproduct = (id, isNew, stock) => {
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
    };
};
exports.createproduct = createproduct;
