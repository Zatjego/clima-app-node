const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70075147997a0f03cb97eab0635122d1&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}