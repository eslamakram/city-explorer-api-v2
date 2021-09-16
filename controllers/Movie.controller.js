"use strict";
const Movie = require("../models/Movie.model");
const axios = require('axios');


const movieController=  async (req, res)=>{
   
    let city = req.query.cityName;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}`;
        let axiosRes = await axios.get(url);
        // console.log(axiosRes.results);
        let movieData = axiosRes.data.results.map(movie =>{
            return new Movie(movie.title, movie.overview, movie.popularity, movie.vote_average, movie.vote_count, movie.release_date, movie.poster_path);
        });
        res.status(200).json(movieData);
    }

module.exports=movieController;