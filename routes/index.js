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

//FIRST PRIORITY
//Send a GET request to /aerials READ(view) a list of all exercise types and moves
router.get('/aerials', asyncHandler(async (req, res) => {
    //Lists the exercises in the AerialTypes db
    const exerciseList = await AerialType.findAll(); 
    const exercises = exerciseList.map(exercises => exercises.exercise_type)
    res.render('index', {exercises})
}));


//Send a GET request to /aerials/{$exercise} READ(view) specific exercise type
router.get('/aerials/:id', asyncHandler(async (req, res) => {
  //Make a variable for the header that changes based on which page you are on
  const exerciseName = await AerialType.findOne({
    where: {
        id: req.params.id
    }
  })
  // console.log(theName)
  const theName = exerciseName.exercise_type; 
  console.log(theName); 

  //Find the aerialType by its id and add it to the render variables
  const exerciseList = await Moves.findAll({
    where: {
      exerciseTypeId: req.params.id} 
    }); 
  const aerialMoves = exerciseList.map(move => move.move)
  res.render('eachAerial', { aerialMoves, exerciseName })
})); 

//Send a POST request to /aerials/:id to CREATE an individual move to the exercise type 


//Send a POST request to /aerials to CREATE a new exercise type
router.post('/aerials', asyncHandler(async (req, res) => {
  // console.log(req.body);  
  const exerciseType = await AerialType.create(req.body); 
  res.redirect(`/aerials/${exerciseType.id}`)
})); 







//SECOND PRIORITY
//Send a PUT request to /aerials to UPDATE(edit) an exercise move

//Send a GET request to /aerials/{$exercise}/:id to READ(view) a the details of a specific exercise move 

//Send a DELETE request to /aerials DELETE an exercise move

module.exports = router; 