const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion
//una funcion Async a fuerza regresa una Promise

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${ coord.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determina el clima de ${ direccion }`;
    }

    //El clima de X lugar es de X temperatura

    //Err: No se pudo determinar el clima de X lugar

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);