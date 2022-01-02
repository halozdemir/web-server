const request = require("postman-request");

const forecast = (long, lat, callback) => {
  const Weatherurl = `http://api.weatherstack.com/current?access_key=d836f97943878a527f5e9e67feed982e&query=${long},${lat}&units=f`;

  request({ url: Weatherurl, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service");
    } else if (body.error) {
      callback("Unable to fetch the correct location");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} .Its currently ${body.current.temperature} degrees out. Its like ${body.current.feelslike} degrees out.
          `
      );
    }
  });
};

module.exports = forecast;
