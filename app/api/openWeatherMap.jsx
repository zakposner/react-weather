const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=97666812c0356d003eb93e8cf0448117&units=imperial';

module.exports = {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location); // proper format for http
    let reqUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(reqUrl) // API Call
      .then((res) => {
        if (res.data.cod !== 200) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      })
      .catch((res) => {
        console.log('Error connecting to the weather API');
        console.log(res);
      })
  }
}

// returning the axios call lets us chain promises, attaching then and catch
  // statements to the result of calling the getTemp function itself
