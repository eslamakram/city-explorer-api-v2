"use strict";
const ForeCast = require("../models/ForeCast.model");
const axios = require('axios');


const forecastController=  async (req, res) => {
    let city_name = req.query.searchQuery;
    let latitude = req.query.lat;
    let longitude = req.query.lon;
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&city=${city_name}&key=${process.env.WEATHER_API_KEY}&days=3`;
    let axiosResponse = await axios.get(url);
    let weatherData = axiosResponse.data;
    console.log(weatherData);

    let modeledData = weatherData.data.map(item =>{
        return new ForeCast(item.datetime, item.weather.description);

    });
    res.status(200).json(modeledData);
}

module.exports=forecastController;