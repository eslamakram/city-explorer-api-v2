"use strict";

class Movie{
    constructor(title, overview ,popularity, vote_average, vote_count, release_date, poster_path){
        this.title = title;
        this.overview = overview;
        this.popularity = popularity;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.release_date = release_date;
        this.poster_path = poster_path;
    }
}

module.exports=Movie