const express = require('express'); 
const app = express(); 
const cookieParser = require('cookie-parser'); 

'use strict'; 

const { sequelize, models } = require('./db')
// const db = require('./db'); 
//when this was active the function below has await db.sequelize.sync({ force: true })
const { AerialType, Moves } = models; 

// let silks;
// let staticTrapeze; 
// let closedGazelle; 
// let openGazelle; 

// (async () => {
//     await sequelize.sync({ force: true }); 
//     try{
//         //Uses Promise.all to create all excercise_types at once
//         const aerialInstances = await Promise.all([
//             AerialType.create({
//                 exercise_type: 'Trapeze', 
//             }), 
//             AerialType.create({
//                 exercise_type: 'Silks', 
//             })
//         ]); 
//         console.log(JSON.stringify(aerialInstances, null, 2))
        
//        let [staticTrapeze, silks] = aerialInstances; 

//         //Use Promise.all to create all moves at once
//         const moveInstances = await Promise.all([
//             Moves.create({
//                 move: 'closed gazelle', 
//                 level: 1, 
//                 achieved: false, 
//                 exerciseTypeId: staticTrapeze.id,
//             }),
//             Moves.create({
//                 move: 'open gazelle', 
//                 level: 1, 
//                 achieved: true,
//                 exerciseTypeId: staticTrapeze.id,
//             })
//         ]); 
//         // console.log(JSON.stringify(moveInstances, null, 2)); 

//         const exercises = await AerialType.findAll({
//             include: [
//                 {
//                     model: Moves, 
//                 }
//             ]
//         }); 
//         console.log(JSON.stringify(exercises, null, 2)); 
//         // console.log(exercises.map(exercise => exercise.get({ plain: true }))); 

//         const moves = await Moves.findAll({
//             include: [
//                 {
//                     model: AerialType, 
//                 }, 
//             ], 
//         }); 
//         console.log(moves.map(move => move.get({ plain: true }))); 

//         process.exit(); 

//     }catch (error) {
//         if(error.name === 'SequelizeValidationError'){
//             const errors = error.errors.map(err => err.message); 
//             console.error('Validation errors: ', errors); 
//         } else {
//             throw error; 
//         }
//     }
// }) (); 

app.use(express.urlencoded( {extended: true} ));
app.use(cookieParser()); 
app.set('view engine', 'pug'); 

const routes = require('./routes');
app.use(routes); 

app.listen(3000, () => console.log('Aerials API listening on Port 3000')); 
