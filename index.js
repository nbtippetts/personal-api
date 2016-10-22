var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var middleware = require('./controllors/middleware.js');
var mainCtrl = require('./controllors/mainCtrl.js');



  app.use(bodyParser.json());
  app.use(middleware.addHeaders);

  app.get('/name', mainCtrl.getName);

  app.get('/location', mainCtrl.getLocation);

  app.get('/occupation', mainCtrl.getOccupation);

  app.get('/last/occupation', mainCtrl.getLastOccupation);

  app.get('/hobbies', mainCtrl.getHobbies);

  app.get('/hobbies/:type', mainCtrl.getHobbiesByType);

  app.get('/family', mainCtrl.myFamily);

  app.get('/family/relation', mainCtrl.getFamily);

  app.get('/family/:gender', mainCtrl.getGender);

  app.get('/restaurants', mainCtrl.getRestaurants);

  app.get('/restaurants/rating', mainCtrl.restaurantRating);

  //app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

  app.get('/occupation/order', mainCtrl.getOccupations);

  app.put('/name', mainCtrl.editName);

  app.put('/location', mainCtrl.updateLocation);

  app.post('/hobbies', mainCtrl.addHobbies);

  app.post('/occupation', mainCtrl.addOccupation);


  app.listen(8887, function() {
    console.log('Listening on port 8887');
});
