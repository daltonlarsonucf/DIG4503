const Express = require("express");
const App = Express();
const port = 8001;

App.get('/', function(request, response){
  response.send("Hello world!");
});

App.use('/public', Express.static('public'));

App.listen(port, function(){
        console.log("Server running!");
});