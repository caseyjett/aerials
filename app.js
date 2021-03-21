const express = require('express'); 
const app = express(); 
const cookieParser = require('cookie-parser'); 
const Sequelize = require('sequelize'); 

const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: 'aerials.db', 
    // logging: true //diasables the sql logging
}); 

class AerialType extends Sequelize.Model {}
AerialType.init({
    type: Sequelize.STRING
}, { sequelize }); 

(async () => {
    await sequelize.sync({ force: true }); 
    try{
        const aerialInstances = await Promise.all([
            AerialType.create({
                type: 'Trapeze', 
            }), 
            AerialType.create({
                type: 'Silks', 
            })
        ]); 
        const aerialInstancesJSON = aerialInstances.map(aerialType => aerialType.toJSON()); 
        console.log(aerialInstancesJSON); 

        // //Instances of AerialType classes created individually 
        // const aerial_type = await AerialType.create({
        //     type: 'Trapeze', 
        // }); 
        // console.log(aerial_type.toJSON()); 
        // const aerial_type2 = await AerialType.create({
        //     type: 'Silks', 
        // }); 
        // console.log(aerial_type2.toJSON()); 

    }catch (error) {
        console.error('Error connecting to the database: ', error); 
    }
}) (); 

app.use(express.urlencoded( {extended: true} ));
app.use(cookieParser()); 
app.set('view engine', 'pug'); 

const routes = require('./routes');
app.use(routes); 

app.listen(3000, () => console.log('Aerials API listening on Port 3000')); 
