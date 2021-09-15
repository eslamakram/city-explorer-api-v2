"use strict";
const Movie = require("../models/Movie.model");
const axios = require('axios');


const movieController=  async (req, res)=>{
        let url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIE_API_KEY}`;
        let axiosRes = await axios.get(url);
        console.log(axiosRes);
        let movieData = axiosRes.map(movie =>{
            return new Movie(movie.title, movie.overview, movie.popularity, movie.vote_average, movie.vote_count, movie.release_date, movie.poster_path);
        });
        res.status(200).json(movieData);
    }

module.exports=movieController;