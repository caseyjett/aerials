const express = require('express'); 
const router = express.Router(); 
const AerialTypes = require('../db/models/aerials').AerialTypes; 
const Moves = require('../db/models/moves').Moves; 

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

const exercises = [
    'warm-ups', 
    'trapeze', 
    'silks',
    'conditioning'
]; 

const trapezeMoves = [
    'gazelle', 
    'half angel', 
    'mermaid on the bar', 
    'mermaid under the bar'
]

//FIRST PRIORITY
//Send a GET request to /aerials READ(view) a list of all exercise types and moves
router.get('/aerials', asyncHandler(async (req, res) => {
    res.render('index', {exercises})
}));

//Send a GET request to /aerials/{$exercise} READ(view) specific exercise moves
// router.get('/:exercise', (req, res) => {
//     res.render('eachAerial', { trapezeMoves })
//     you can use template literal in res.render(`/'aerials/${exercise}`) but will need to first define what that variable is somehow
// })

//Send a POST request to /aerials to CREATE a new exercise type
router.post('/aerials', asyncHandler(async (req, res) => {
    const exerciseType = await AerialTypes.create(req.body); 
    // console.log(req.body);
    // res.cookie('exercise', req.body.exercise)
    res.redirect('/aerials/' + exerciseType.id)
})); 
//Send a PUT request to /aerials to UPDATE(edit) an exercise move


//Send GET to /thanks to READ(view) a generic 'Thank you' for redirecting after adding an exercise or move
router.get('/thanks', (req, res) => {
    const exercise = req.cookies.exercise; 
    res.render('thanks', {exercise})
});








//SECOND PRIORITY
//Send a GET request to / to READ a list of all excersise types

//Send a GET request to /aerials/{$exercise}/:id to READ(view) a specific exercise move 

//Send a DELETE request to /aerials DELETE an exercise move

module.exports = router; 