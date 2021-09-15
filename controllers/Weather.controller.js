"use strict";
const weatherData = require('../data/weather.json');
const ForeCast = require("../models/ForeCast.model");

const weatherController = (req,res) => {
    let lat = Number(req.query.lat);
    let lon = Number(req.query.lon);
    let searchQuery = [];

    console.log(weatherData) 
       if( lat && lon  ){
        searchQuery =  weatherData.find(item =>{
         if( lat === item.lat &&
             lon === item.lon 
            ){
                 return item;
             } });

            console.log(searchQuery) 
            res.send('hello!')
           
           let forecastDays = searchQuery.data.map(day =>{

            return  new ForeCast(day.datetime, day.weather.description);
            
        });
  
     res.status(200).json(forecastDays); 
      
     } else{
    res.status(500).send('invalid entry!');
}

}

module.exports=weatherController;