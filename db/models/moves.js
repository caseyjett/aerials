const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Moves extends Sequelize.Model {}
    Moves.init({
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        move: {
            type: Sequelize.STRING,
            allowNull: false, 
            validate: {
                notNull: {
                    msg: 'Please provide a value for "move"'
                },
                notEmpty: {
                    msg: 'Please provide a value for "move"'
                } 
            }
        }, 
        level: {
            type: Sequelize.INTEGER,
            allowNull: true, 
        },
        achieved: {
            type: Sequelize.INTEGER,
            allowNull: true, 
        },
    }, {
        freezeTableName: true,  
        sequelize 
    }); 

    Moves.associate = (models) => {
        Moves.belongsTo(models.AerialType, { 
            foreignKey: {
                fieldName: 'exerciseTypeId', 
                allowNull: false,
            },
            // onUpdate: 'CASCADE', 
            // onDelete: 'SET NULL'  
        });
    }

    return Moves; 
}