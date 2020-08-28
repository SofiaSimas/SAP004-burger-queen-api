'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_x_order = sequelize.define('Products_x_order', {
    add_option: DataTypes.BOOLEAN,
    type_of_protein: DataTypes.STRING
  }, {});
  Products_x_order.associate = function(models) {
    // associations can be defined here
  };
  Products_x_order.associate = function(models) {
    Products_x_order.belongsTo(models.Product)
    Products_x_order.belongsTo(models.Order)
  };
  return Products_x_order;
};