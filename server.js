'use strict'
const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();
server.use(cors());
const PORT = process.env.PORT;
const forecastController=require("./controllers/Forecast.controller");
const movieController=require("./controllers/Movie.controller");
const weatherController = require("./controllers/Weather.controller")

// test port with / endpoint
server.get('/', (req, res) => {
    res.status(200).json({ 'message': 'Im wotking' })
});


server.get('/localweather', weatherController);
server.get('/weather', forecastController);
server.get('/movie',movieController);

// put a listener to server takes port and callback 
server.listen(PORT, () => { console.log(`listening to port ${PORT}`) });













//.......................... weather api..............

// let handleWeather = async (req, res) => {
//     let city_name = req.query.searchQuery;
//     let latitude = req.query.lat;
//     let longitude = req.query.lon;
//     let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&city=${city_name}&key=${process.env.WEATHER_API_KEY}&days=3`;
//     let axiosResponse = await axios.get(url);
//     let weatherData = axiosResponse.data;
//     console.log(weatherData);

//     let modeledData = weatherData.data.map(item =>{
//         return new ForeCast(item.datetime, item.weather.description);

//     });
//     res.status(200).json(modeledData);
// }

// Endpoint: GET: /weather
// server.get('/weather', forecastController);
// // model forecast
// class ForeCast{
//     constructor(date, description){
//          this.date = date;
//          this.description = description;
//     }
// }

// .............................................//

// let handleMovie = async (req, res)=>{
//     let url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIE_API_KEY}`;
//     let axiosRes = await axios.get(url);
//     console.log(axiosRes);
//     let movieData = axiosRes.map(movie =>{
//         return new Movie(movie.title, movie.overview, movie.popularity, movie.vote_average, movie.vote_count, movie.release_date, movie.poster_path);
//     });
//     res.status(200).json(movieData);
// }

// server.get('/movie',movieController);

// class Movie{
//     constructor(title, overview ,popularity, vote_average, vote_count, release_date, poster_path){
//         this.title = title;
//         this.overview = overview;
//         this.popularity = popularity;
//         this.vote_average = vote_average;
//         this.vote_count = vote_count;
//         this.release_date = release_date;
//         this.poster_path = poster_path;
//     }
// }


