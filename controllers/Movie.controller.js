"use strict";
const Movie = require("../models/Movie.model");
const axios = require('axios');
const Cache = require('../data/cacheData')
let cache = new Cache();


const movieController=  async (req, res)=>{
      let currentDate = new Date();
        let cacheDate =  cache.date.getDate();
        console.log(`cache date : ${cacheDate}`);
        if (cache.data.length > 0 && cacheDate ===currentDate.getDate() ){
            res.json({"data":cache,"message":"data retrieved from the cache"});

        }else{
   
    let city = req.query.cityName;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}`;
        let axiosRes = await axios.get(url);
        // console.log(axiosRes.results);
        let movieData = axiosRes.data.results.map(movie =>{
            return new Movie(movie.title, movie.overview, movie.popularity, movie.vote_average, movie.vote_count, movie.release_date, movie.poster_path);
        });
        cache.data = movieData
        cache.date = currentDate
        res.json({movieData, "message ":" data is coming from the api"});
    }
    }

module.exports=movieController;


