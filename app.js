var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  const express = require('express');
  const mustacheExpress = require('mustache-express');
  const data = require('./data.json');

  const app = express();
  app.use(express.static("public"));

  app.engine('mustache', mustacheExpress());
  app.set('views', './views')
  app.set('view engine', 'mustache')


  app.get("/site", function(req, res) {
    res.render("index", data);
  });



// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});

app.listen(3000, function(){
  console.log("working");
});
