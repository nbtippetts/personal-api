  var users = require('../users.js');

module.exports = {
  getName: function(req, res){
    res.status(200).send({name: users.name})
  },

  getLocation: function(req, res){
    res.status(200).send({location: users.location})
  },

  getOccupation: function(req, res){
    res.status(200).send({occupations: users.occupations})
  },

  getLastOccupation: function(req, res){
    res.status(200).send({occupations: users.occupations.splice(2)})
  },

  getHobbies: function(req, res){
    res.status(200).send({hobbies: users.hobbies})
  },

  getHobbiesByType: function(req, res){
    var hobbyType = req.params.type;
    var selectedType = users.hobbies.filter(function(value){
      if(hobbyType === value.type){
        return value;
      }
    })
    res.status(200).json(selectedType);
  },

  myFamily: function(req, res){
      res.status(200).send({family: users.family})
  },

   getFamily: function(req, res){
     var relations = req.query.relation;
     var getRelation = users.family.filter(function(response){
       if (relations === response.relation){
         return response;
       }
     })
     res.status(200).json(getRelation)
   },

   getGender: function(req, res){
     var genders = req.params.gender;
     var getGender = users.family.filter(function(value){
       if (genders === value.gender){
         return value;
       }
     })
     res.status(200).json(getGender)
   },

   getRestaurants: function(req, res){
     res.status(200).send({restaurants: users.restaurants})
   },

   restaurantRating: function(req, res){
     var rate = req.query.rating;
     var restaurant = users.restaurants.rating;
         if (restaurant >= 2){
           return restaurant;
         } else {
           return users.restaurants;
         }
       })
     res.status(200).json(restaurant)
   },

  //  getRestaurantsName: function(req, res){
  //    var names = req.params.name;
  //    var favoriteRestaurant = users.restaurants.filter(function(value){
  //      if (names == value.name){
  //        return value + ex;
  //      }
  //    })
  //    res.status(200).json(favoriteRestaurant)
  //  }

  getOccupations: function(req, res) {
  if(req.query.order === 'asc') {
    res.status(200).json({occupations: users.occupations.sort()})
      console.log('sort occupations by asc')
  } else if(req.query.order === 'desc') {
      res.status(200).json({occupations: users.occupations.sort().reverse()})
        console.log('sort occupations by desc')
  } else {
      res.status(200).json({occupations: users.occupations})
        console.log('got your occupations')
         }
  },


  editName: function(req, res){
    users.name = req.body.name;
    res.status(200).send({name: users.name});
    console.log('you have changed your name');
  },


  updateLocation: function(req, res){
    users.location = req.body.location;
    res.status(200).send({location: users.location});
  },

  addHobbies: function(req, res){
    if (res.body.type && res.body.name){
      users.hobbies.push(req.body);
      res.status(200).send({hobbies: users.hobbies});
    } else {
      console.log('must have type and name');
    }

  },

  addOccupation: function(req, res){
        if (res.body.occupations){
          users.occupations.push(req.body.occupations);
          res.status(200).json(users.occupations);
        } else {
          console.log('Go home you are drunk');
        }
   },





}
