//Uses axios, chalk, and prompt-sync
const axios = require('axios');
const chalk = require('chalk');
const prompt = require('prompt-sync')();

//Placeholders
var name = '';
var id = '';
var type = '';
var type2 = '';
var typeColor = '';
var typeColor2 = '';

//Pokemon types and the color of that type
const normal = '#A8A77A';
const fire = '#EE8130';
const water = '#6390F0';
const electric = '#F7D02C';
const grass = '#7AC74C';
const ice = '#96D9D6';
const fighting = '#C22E28';
const poison = '#A33EA1';
const ground = '#E2BF65';
const flying = '#A98FF3';
const psychic = '#F95587';
const bug = '#A6B91A';
const rock = '#B6A136';
const ghost = '#735797';
const dragon = '#6F35FC';
const dark = '#705746';
const steel = '#B7B7CE';
const fairy = '#D685AD';
 
//Prompts user to enter a Pokemon
var userPokemon = prompt('Enter a pokemon: ');
//Makes user input all lowercase so it works in the link
userPokemon = userPokemon.toLowerCase();
//Uses user inputted Pokemon to create an API link for that Pokemon
const api = 'https://pokeapi.co/api/v2/pokemon/' + userPokemon;

//Fetch data from API
axios(api)
    //If successful then
    .then(function (response) {
        //Stores data from API
        const pokemon = response.data;
        name = pokemon.name;
        id = pokemon.id;
        type = pokemon.types[0].type.name;
        //Checks to see if the Pokemon has multiple types
        if(pokemon.types.length == 2){
          type2 = pokemon.types[1].type.name;
        }
        //Selects a color for type of Pokemon
        if(type == 'normal'){
          typeColor = normal;
        }else if(type == 'fire'){
          typeColor = fire;
        }else if(type == 'water'){
          typeColor = water;
        }else if(type == 'electric'){
          typeColor = electric;
        }else if(type == 'grass'){
          typeColor = grass;
        }else if(type == 'ice'){
          typeColor = ice;
        }else if(type == 'fighting'){
          typeColor = fighting;
        }else if(type == 'poison'){
          typeColor = poison;
        }else if(type == 'ground'){
          typeColor = ground;
        }else if(type == 'flying'){
          typeColor = flying;
        }else if(type == 'psychic'){
          typeColor = psychic;
        }else if(type == 'bug'){
          typeColor = bug;
        }else if(type == 'rock'){
          typeColor = rock;
        }else if(type == 'ghost'){
          typeColor = ghost;
        }else if(type == 'dragon'){
          typeColor = dragon;
        }else if(type == 'dark'){
          typeColor = dark;
        }else if(type == 'steel'){
          typeColor = steel;
        }else if(type == 'fairy'){
          typeColor = fairy;
        }
        //Second type
        if(type2 == 'normal'){
          typeColor2 = normal;
        }else if(type2 == 'fire'){
          typeColor2 = fire;
        }else if(type2 == 'water'){
          typeColor2 = water;
        }else if(type2 == 'electric'){
          typeColor2 = electric;
        }else if(type2 == 'grass'){
          typeColor2 = grass;
        }else if(type2 == 'ice'){
          typeColor2 = ice;
        }else if(type2 == 'fighting'){
          typeColor2 = fighting;
        }else if(type2 == 'poison'){
          typeColor2 = poison;
        }else if(type2 == 'ground'){
          typeColor2 = ground;
        }else if(type2 == 'flying'){
          typeColor2 = flying;
        }else if(type2 == 'psychic'){
          typeColor2 = psychic;
        }else if(type2 == 'bug'){
          typeColor2 = bug;
        }else if(type2 == 'rock'){
          typeColor2 = rock;
        }else if(type2 == 'ghost'){
          typeColor2 = ghost;
        }else if(type2 == 'dragon'){
          typeColor2 = dragon;
        }else if(type2 == 'dark'){
          typeColor2 = dark;
        }else if(type2 == 'steel'){
          typeColor2 = steel;
        }else if(type2 == 'fairy'){
          typeColor2 = fairy;
        }
        //Displays Pokemon's information
        console.log('Name: ' + name);
        console.log('Pokedex Number: #' + id);
        //Displays both types if Pokemon has two, otherwise just the one
        if(type2 != ''){
          console.log('Type: ' + chalk.hex(typeColor)(type) + ' ' + chalk.hex(typeColor2)(type2));
        }else{
          console.log('Type: ' + chalk.hex(typeColor)(type));
        }
    })
    //If unsuccessful then
    .catch(function (error) {
      //Displays error
      console.log('Error: ' + error);
    });