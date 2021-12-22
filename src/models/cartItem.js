'use strict';

const cartItem= (sequelize, DataTypes) =>
 sequelize.define('cartItem', {
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
  


module.exports = cartItem;
