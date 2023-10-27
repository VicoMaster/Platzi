let UnknownVar: unknown;
UnknownVar = true;
UnknownVar = undefined;
UnknownVar = null;
UnknownVar = 1;
UnknownVar = {};
UnknownVar = [];


// Unknown Type obliga a hacer validación de tipos, si no se valida genera error.
if (typeof UnknownVar === 'string') {
    UnknownVar.toUpperCase();
}
// Preveniendo error parse en JSON.parse con UnknownType
const parse = (str: string): unknown => {
    return JSON.parse(str);
};