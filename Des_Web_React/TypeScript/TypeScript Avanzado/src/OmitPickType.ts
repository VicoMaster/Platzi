/**
    Omit y Pick Type son utilty types en TypeScript.

    DTOs:
    Es una abreviatura para referirnos a Data Transfer Objects u Objeto de Transferencias de datos.

    Hay momentos particulares en los que nosotros no necesitamos del todo los tipos, es decir, 
    hay parámetros que no hacen falta, por ejemplo, mandarlos al momento de la creación de un objeto, 
    ya que estos son automáticos como el ID o la fecha de creación.

 */

/**
    [OMIT]
    Con omit podemos omitir las propiedades, campos o llaves que quieramos.
    Sintaxis:
    interface InterfaceName extends Omit<TypeOrInterface, keyToOmit1 | ... | keyToOmitN > {
        statements
    }
    type typeNameDto = Omit<TypeOrInterface, keyToOmit1 | ... | keyToOmitN >

    Pick
    Es lo contrario de Omit, aquí yo elijo los campos que quiero que estén en mi type o interface.
    Sintaxis:
    interface InterfaceName extends Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN> {
    statements
    }

    type typeNameDto = Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN>
*/
