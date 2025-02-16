const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../db.js');

class Test extends Model {}

Test.init( {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
    },
    image: {
        type: DataTypes.CHAR,
        allowNull: false
    },
},
    {
        sequelize,
        modelName: 'test',
        timestamps: false,
        freezeTableName: true
    }
);

async () => { await sequelize.sync({force: true})};
module.exports = Test;
