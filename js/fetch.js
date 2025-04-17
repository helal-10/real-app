// export const getWeatherByCity = async function (city) {
//   const location = await fetchGeocodingAPI(city);
//   const weahter = await fetchApi(location);

//   return weahter;
// };

// const fetchApi = async function (obj) {
//   try {
//     const request = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${obj["lat"]}&lon=${obj["lon"]}&appid=cfd3cb2c6f3e00b15991bbce479aa658&units=metric`
//     );
//     if (!request.ok) {
//       throw new Error("Not Found");
//     }
//     const response = await request.json();
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// };

// const fetchGeocodingAPI = async function (city) {
//   try {
//     const request = await fetch(
//       `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=cfd3cb2c6f3e00b15991bbce479aa658`
//     );
//     if (!request.ok) {
//       throw new Error("Not Found!");
//     }
//     const response = await request.json();
//     return {
//       cityName: city,
//       lat: response[0].lat,
//       lon: response[0].lon,
//     };
//   } catch (e) {
//     console.error("mmm Not Found");
//   }
// };
