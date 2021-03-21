const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Trapeze extends Sequelize.Model {}
    Trapeze.init({
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
                    msg: 'Please provide a value for "exercise_type"'
                },
                notEmpty: {
                    msg: 'Please provide a value for "exercise_type"'
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
        // exerciseTypeId: {
        //     type: Sequelize.INTEGER, 
        //     allowNull: false, 
        //     validate: {
        //         notNull: {
        //             msg: 'Please provide a value for "exerciseTypeId"'
        //         }
        //     },
        // }
    }, {
        freezeTableName: true,  
        sequelize 
    }); 

    Trapeze.associate = (models) => {
        Trapeze.belongsTo(models.AerialType, { 
            foreignKey: 'ExerciseTypeId', 
            onUpdate: 'CASCADE', 
            onDelete: 'SET NULL'  
        });
    }

    return Trapeze; 
}