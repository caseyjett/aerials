const express = require('express'); 
const app = express(); 

//FIRST PRIORITY
//Send a GET request to /aerials READ(view) a list of all exercise types and moves

//Send a GET request to /aerials/{$exercise} READ(view) specific exercise moves

//Send a POST request to /aerials to CREATE a new exercise move

//Send a PUT request to /aerials to UPDATE(edit) an exercise move





//SECOND PRIORITY
//Send a GET request to /exercise to READ a list of all excersise types

//Send a GET request to /aerials/{$exercise}/:id to READ(view) a specific exercise move 

//Send a DELETE request to /aerials DELETE an exercise move

app.listen(3000, () => console.log('Aerials API listening on Port 3000')); 
