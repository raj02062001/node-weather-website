// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=60834d113281ca2f9dd1ce1be5d98ef5&query=" +
//     latitude +
//     "," +
//     longitude +
//     "&units=f";

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather service!", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(
//         undefined,
//         response.body.current.weather_descriptions[0] +
//           ". It is currentally " +
//           response.body.current.temperature +
//           " degrees out. There is a " +
//           response.body.current.feelslike +
//           " degrees out."
//       );
//     }
//   });
// };

// module.exports = forecast;

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  console.log(latitude, longitude);
  const url =
    "http://api.weatherstack.com/current?access_key=60834d113281ca2f9dd1ce1be5d98ef5&query=" +
    latitude +
    "," +
    longitude +
    "&";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      console.log(body.error);
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currentally " +
          body.current.temperature +
          " degrees out. There is a " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
