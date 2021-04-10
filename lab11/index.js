import MongoClient from 'mongodb';

const URL = 'mongodb+srv://dlarson:lqe555MIJAfElPVu@cluster0.oewwc.mongodb.net/test';

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
  let database = connection.db('sample_airbnb');
  let collection = database.collection('listingsAndReviews');

  let cursor = collection.find({'review_scores.review_scores_rating': {$gte: 99}}, {beds: {$gte: 5}}, {review_scores: {$lte: 200}});

  cursor.forEach(document => {
    console.log(document.name);
  }, () => {
    connection.close();
  })
})
.catch(error => {
  console.log('Error: ' + error);
});