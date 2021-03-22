const Sequelize = require('sequelize'); 

const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: 'aerials.db', 
    // logging: false, //disables the sql logging
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
db.models.AerialType.associate(db.models);
db.models.Trapeze.associate(db.models);


module.exports = db; 