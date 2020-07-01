const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=70075147997a0f03cb97eab0635122d1`,
        headers: { 'appid': '70075147997a0f03cb97eab0635122d1' }
    });

    const resp = await instance.get();

    if (resp.data.sys.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.sys;
    const direccion = resp.data.sys.country;
    const lon = resp.data.coord.lon;
    const lat = resp.data.coord.lat;


    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}