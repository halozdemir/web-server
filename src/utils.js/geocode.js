const request = require("postman-request");

const geoCode = (address, callback) => {
  const url = `
    https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGFsaXRvemRlbWlyIiwiYSI6ImNrdDBpaTJ0MzAwcnMydW56cHBzYW5icHcifQ.B8fMqHqbFeYncCh6WDrzRw&limit=1
    `;

  request({ url, json: true }, (error, { body = "undefined" }) => {
    if (error) {
      callback("Unable to connect to the location services");
    } else if (body.features.length === 0) {
      callback("Unable to find location...Try another search.");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
