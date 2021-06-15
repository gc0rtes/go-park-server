"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    static associate(models) {
      city.hasMany(models.park);
    }
  }
  city.init(
    {
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "city",
    }
  );
  return city;
};
