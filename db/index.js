const Sequelize = require('sequelize'); 

const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: 'aerials.db', 
    // logging: false, //diasables the sql logging
    define:  {
        timestamps: false, 
    }
}); 

const db = {
    sequelize, 
    Sequelize, 
    models: {}, 
};

db.models.AerialType = require('./models/aerials.js')(sequelize); 
db.models.Trapeze = require('./models/trapeze.js')(sequelize); 

module.exports = db; 