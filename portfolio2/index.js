//Uses mongodb, chalk, and prompt-sync
import MongoClient from 'mongodb';
import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();

//Sets personal url
const URL = 'mongodb+srv://dlarson:lqe555MIJAfElPVu@cluster0.oewwc.mongodb.net/test';

//Prompts user and coverts input to integers
var guests = prompt('How many guests? ');
guests = parseInt(guests);

var beds = prompt('How many beds? ');
beds = parseInt(beds);

var max_price = prompt('Maximum price per night? ');
max_price = parseInt(max_price);

//Connects to MongoDB url
MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
  let database = connection.db('sample_airbnb');
  let collection = database.collection('listingsAndReviews');

  //Sets what the user is looking for in an airbnb and limits to 10 listings
  let cursor = collection.find({accommodates: guests}, {beds: {$gte: beds}}, {price: {$lte: max_price}}).limit(10);

  //Searches through database 
  cursor.forEach(document => {
    //Displays information in the console
    console.log(chalk.green(document.name));
    console.log('Guests: ' + chalk.blue(document.accommodates));
    console.log('Beds: ' + chalk.red(document.beds));
    console.log('Price: ' + chalk.yellow('$') + chalk.yellow(document.price));
  }, () => {
    //Closes connection
    connection.close();
  })
})
//Displays error if one is to occur
.catch(error => {
  console.log('Error: ' + error);
});