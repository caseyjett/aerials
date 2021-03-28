const express = require('express'); 
const router = express.Router(); 

const { sequelize, models } = require('../db');
const { AerialType, Moves } = models; 


/* Handler function to wrap each route. */
function asyncHandler(cb){
    return async(req, res, next) => {
      try {
        await cb(req, res, next)
      } catch(error){
        res.status(500).send(error); 
      }
    }
}

//This should be deleted once the db is connected
const exercises = [
    'warm-ups', 
    'trapeze', 
    'silks',
    'conditioning'
]; 

//FIRST PRIORITY
//Send a GET request to /aerials READ(view) a list of all exercise types and moves
router.get('/aerials', asyncHandler(async (req, res) => {
    //look below to sort out how to make the list on this page use the exercises in the AerialTypes db
    res.render('index', {exercises})
}));


//Send a GET request to /aerials/{$exercise} READ(view) specific exercise type
router.get('/aerials/:id', asyncHandler(async (req, res) => {
  //Find the aerialType by its id and add it to the render variables
  const exerciseList = await Moves.findAll({
    where: {
      exerciseTypeId: req.params.id} 
    }); 
  const trapezeMoves = exerciseList.map(move => move.move)
  res.render('eachAerial', { trapezeMoves,  })
})); 

//Send a POST request to /aerials/:id to CREATE an individual move to the exercise type 


//Send a POST request to /aerials to CREATE a new exercise type
router.post('/aerials', asyncHandler(async (req, res) => {
  console.log(req.body);  
  const exerciseType = await AerialType.create(req.body); 
  res.redirect(`/aerials/${exerciseType.id}`)
})); 







//SECOND PRIORITY
//Send a PUT request to /aerials to UPDATE(edit) an exercise move

//Send a GET request to /aerials/{$exercise}/:id to READ(view) a teh details of a specific exercise move 

//Send a DELETE request to /aerials DELETE an exercise move

module.exports = router; 