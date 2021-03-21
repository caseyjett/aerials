const express = require('express'); 
const app = express(); 

app.use(express.urlencoded( {extended: true} ));
app.set('view engine', 'pug'); 


const exercises = [
    'warm-ups', 
    'trapeze', 
    'silks',
    'conditioning'
]; 

//FIRST PRIORITY
//Send a GET request to /aerials READ(view) a list of all exercise types and moves
app.get('/aerials', (req, res) => {
    res.render('index', {exercises})
})

//Send a GET request to /aerials/{$exercise} READ(view) specific exercise moves

//Send a POST request to /aerials to CREATE a new exercise move
app.post('/aerials', (req, res) => {
    console.log(req.body);
    res.render('index', {exercises})
}); 
//Send a PUT request to /aerials to UPDATE(edit) an exercise move





//SECOND PRIORITY
//Send a GET request to / to READ a list of all excersise types

//Send a GET request to /aerials/{$exercise}/:id to READ(view) a specific exercise move 

//Send a DELETE request to /aerials DELETE an exercise move



app.listen(3000, () => console.log('Aerials API listening on Port 3000')); 
