const {DataTypes} = require("sequelize");
module.exports = (sequelize)=>{
    sequelize.define("User",{
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type:DataTypes.STRING,
        },
        id:{
            type:DataTypes.STRING,
            primaryKey:true,
            unique: true,
            allowNull: false,

        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        admin:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
        },
        blocked:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
        },
        secret:{
            type:DataTypes.STRING,
            allowNull: true,
        }
    },
    {timestamps:false}
    );
};


