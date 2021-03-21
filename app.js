const express = require('express'); 
const app = express(); 
const cookieParser = require('cookie-parser'); 

const db = require('./db'); 
const { AerialType, Trapeze } = db.models; 

(async () => {
    await db.sequelize.sync({ force: true }); 
    try{
        // //Uses Promise.all to create all at once
        // const aerialInstances = await Promise.all([
        //     AerialType.create({
        //         type: 'Trapeze', 
        //     }), 
        //     AerialType.create({
        //         type: 'Silks', 
        //     })
        // ]); 
        // const aerialInstancesJSON = aerialInstances.map(aerialType => aerialType.toJSON()); 
        // console.log(aerialInstancesJSON); 

        // //Instances of AerialType classes created individually 
        const aerial_type = await AerialType.create({
            exercise_type: 'Trapeze', 
        }); 
        // console.log(aerial_type.toJSON()); 
        const aerial_type2 = await AerialType.create({
            exercise_type: 'Silks', 
        }); 
        // console.log(aerial_type2.toJSON()); 

        //New Trapeze record
        const trapeze_move = await Trapeze.create({
            move: 'closed gazelle', 
            level: 1, 
            achieved: false, 
        })
        // console.log(trapeze_move.toJSON())

    }catch (error) {
        if(error.name === 'SequelizeValidationError'){
            const errors = error.errors.map(err => err.message); 
            console.error('Validation errors: ', errors); 
        } else {
            throw error; 
        }
    }
}) (); 

app.use(express.urlencoded( {extended: true} ));
app.use(cookieParser()); 
app.set('view engine', 'pug'); 

const routes = require('./routes');
app.use(routes); 

app.listen(3000, () => console.log('Aerials API listening on Port 3000')); 
