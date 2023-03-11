"use strict";
(function () {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan america',
        poder: 'DROGO'
    };
    const extraer = ({ nombre, poder }) => {
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
})();
