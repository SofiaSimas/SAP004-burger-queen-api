'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    table: DataTypes.INTEGER,
    customer: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};