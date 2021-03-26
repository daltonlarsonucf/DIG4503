import Express from 'express';
import fs from 'fs';
const App = Express();
const port = 3010;

let fileContents = fs.readFileSync('database.json');

let database = JSON.parse(fileContents);

App.use('/', Express.static('public'));

App.get('/api/employees/:name', (req,res) => {
  let result = {'error': 'not found'}

  database.forEach((value) => {
    if(req.params.name == value.name) {
      result = value;
    }
  });

  res.json(result);
})

App.get('/api/ages/:age', (req,res) => {
  let result = {'error': 'not found'}

  database.forEach((value) => {
    if(req.params.age == value.age) {
      result = value;
    }
  });

  res.json(result);
})

App.post('/api/employees/:name/:age', (req,res) => {
  let result = {'name': req.params.name, 'age': parseInt(req.params.age)};
  database.push(result);
  fs.writeFileSync('database.json', JSON.stringify(database, null, '\t'));
  res.JSON(result);
})

App.listen(port, () => {
  console.log('Server running!');
})