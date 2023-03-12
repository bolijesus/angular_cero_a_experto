var superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion: function () {
        return "".concat(this.nombre, ", ").concat(this.direccion.ciudad, ", ").concat(this.direccion.pais);
    }
};
var direccion = superHeroe.mostrarDireccion();
console.log(direccion);
