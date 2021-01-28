const axios = require('axios');
//Uses axios

axios('https://pokeapi.co/api/v2/pokemon/togepi')
//Fetch data from API
    .then(function (response) {
    //If successful then
        const pokemon = response.data;
        //Stores data from API
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
        //Displays pokemon's information
    })
    .catch(function (error) {
    //If unsuccessful then
        console.log("Error: " + error);
        //Displays error
    });