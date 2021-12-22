'use strict';

const product= (sequelize, DataTypes) =>  sequelize.define('storeproduct', {
    category: {
            type: DataTypes.STRING,
            
        },
        name: {
            type: DataTypes.STRING,
           
        },
        description:
        {
            type:DataTypes.STRING,
           
        },
        price: {

             type: DataTypes.INTEGER 

            },
        inventory: {
            
            type:DataTypes.INTEGER
        
        },
        image: { 
            
            type:DataTypes.STRING
        
        }
       
    });
 


module.exports =product ;