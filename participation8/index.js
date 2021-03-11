import Express from 'express';
const App = Express();
const port = 8080;

App.get('/people/:id', (req,res) => {
  res.send("Your unique id is " + req.params.id);
});

App.get('/people/:id/:num', (req,res) => {
  res.send("Your favorite number is " + req.params.num);
});

App.listen(port, () => {

});