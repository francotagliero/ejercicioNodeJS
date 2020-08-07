const Vehicle = require('./Vehicle.js');

class Car extends Vehicle {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    imprimir = () => console.log('Marca: ' + this.marca + ' // Modelo: ' + this.modelo + ' // Puertas: ' + this.puertas + ' // Precio: $' + this.precio);
}


module.exports = Car;