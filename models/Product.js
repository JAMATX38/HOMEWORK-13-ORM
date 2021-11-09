// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// const { Category } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type:DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      } ,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;


//use Lesson 21 to link the tables togethor
// const Driver = require('./Driver');
// const License = require('./License');

// // Define a Driver as having one License to create a foreign key in the `license` table
// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
//   // When we delete a Driver, make sure to also delete the associated License.
//   onDelete: 'CASCADE',
// });

// // We can also define the association starting with License
// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

// // We package our two models and export them as an object so we can import them together and use their proper names
// module.exports = { Driver, License };
