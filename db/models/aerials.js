const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class AerialType extends Sequelize.Model {}
    AerialType.init({
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        exercise_type: {
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
    }, { sequelize }); 

    AerialType.associate = (models) => {
        AerialType.hasMany(models.Trapeze, { 
            foreignKey: {
                fieldName: 'exerciseTypeId', 
                allowNull: false,
            }, 
            // onUpdate: 'CASCADE', 
            // onDelete: 'SET NULL' 
        }); 
    }

    return AerialType; 
}

