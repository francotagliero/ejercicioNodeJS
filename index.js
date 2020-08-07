const Auto = require('./model/Moto.js');
const Moto = require('./model/Car.js');


//Inserto los vehiculos en el array dentro de una funcion.
loadArray = (vehicle) => {
    return vehicles.push(
        new Auto('Peugeot', '206', 200000.00, 4),
        new Auto('Peugeot', '208', 250000.00, 5),
        new Moto('Yamaha', 'YBR', 80500.50, '160c'),
        new Moto('Honda', 'Titan', 60000.00, '125c')
    )
}

//Funcion que imprime todos los vehiculos no importa si son autos o motos
let printAllVehicles = (vehicles) => {
    vehicles.forEach(element => {
        element.imprimir();
    });
}

//Ordeno el array por precio de mas caro a mas barato
sortByPrice = (vehicles) => vehicles.sort((a, b) => b.precio - a.precio);


//Obtengo el vehiculo dentro del array donde en el modelo contenga la letra Y
getVehicleWithLetterY = () => {
    let letterY = vehicles.filter((vehicle) => vehicle.modelo.includes("Y"));
    console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' + letterY[0].marca, letterY[0].modelo + ' $' + letterY[0].precio);

};

//Imprimo marca y modelo de todos los vehiculos dentro del array
printMarcaAndModel = () => {
    vehicles.forEach(element => {
        console.log(element.marca, element.modelo);
    });
}

//imprime linea divisoria
printLineDiv = () => console.log('=============================');



let vehicles = [];
loadArray(vehicles)
printAllVehicles(vehicles);
printLineDiv();

sortByPrice(vehicles);
console.log('Vehiculo mas caro: ' + vehicles[0].marca, vehicles[0].modelo);

vehicles.reverse();
console.log('Vehiculo mas barato: ' + vehicles[0].marca, vehicles[0].modelo);

getVehicleWithLetterY()

printLineDiv();
sortByPrice(vehicles);
console.log('Vehículos ordenados por precio de mayor a menor: ');
printMarcaAndModel()



/* En caso de que pueda haber mas de un vehiculo con la letra Y podria recorrer el array:
function getVehicleWithLetterY() {
    let filter = vehicles.filter(function (vehicle) {
        return vehicle.modelo.includes("Y");
    })
    console.log('Vehículo que contiene en el modelo la letra ‘Y’:');
    filter.forEach(element => {
        console.log(element.marca, element.modelo, element.precio);
    });
}] */