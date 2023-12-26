/**
    Omito 'tags' y todos los parametros actuales serán opcionales y de solo lectura.
    Sin embargo vuelvo a agregar 'tags' manualmente para decirle que será un array de solo lectura.

    export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
        //* Al haberse omitido 'tags' con anterioridad, no se le aplican los efectos de Readonly y Partial,
        //* por lo que necesito volver a aplicar readonly y - ? -
        //* readonly evita que se pueda reasignar | ReadonlyArray evita que se pueda modificar con métodos
        readonly tags?: ReadonlyArray<string>;
    }
 */