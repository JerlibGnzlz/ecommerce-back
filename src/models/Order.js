const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define("order", {
    state: {
      type: DataTypes.ENUM(["pending","accepted","rejected", "send", "delivered"]),
      allowNull:false,
    },
    total:{
        type:DataTypes.DECIMAL,
        allowNull:true,
    },
    date:{
      type:DataTypes.TEXT,
      allowNull:false
    }
  });
};