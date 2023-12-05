"use strict";
/**
    Un enum es un tipo de dato que define un conjunto de valores constantes.
    Los enums se pueden utilizar para representar valores que no cambian.
 */
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES || (ROLES = {}));
// Creamos un const de tipo User
const vicoUser = {
    username: 'VicoMaster',
    role: ROLES.ADMIN
};
