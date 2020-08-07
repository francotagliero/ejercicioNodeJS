const Vehicle = require('./Vehicle.js');

class Moto extends Vehicle {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    imprimir = () => console.log('Marca: ' + this.marca + ' // Modelo: ' + this.modelo + ' // Cilindrada: ' + this.cilindrada + ' // Precio: $' + this.precio);
}


module.exports = Moto;