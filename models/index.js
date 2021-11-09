// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id"
}),

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id"
}),
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id"
}),

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


//need to use the methods from Lesson 21 to link 2 tabkes togethor- use the foreign Key
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
