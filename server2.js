'use strict'
const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();
server.use(cors());
const PORT = process.env.PORT;
const weatherData = require('./data/weather.json');


server.get('/localweather',(req,res) => {
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
            //res.send('hello!')
           
           let forecastDays = searchQuery.data.map(day =>{

            return  new ForeCast(day.valid_date, day.weather.description);
            
        });
  
     res.json(forecastDays); 
      
     } else{
    res.status(500).send('invalid entry!');
}

});

class ForeCast{
    constructor(date, description){
        this.date = date;
        this.description = description;
   }
}

server.listen(PORT, () => { console.log(`listening to port ${PORT}`) });