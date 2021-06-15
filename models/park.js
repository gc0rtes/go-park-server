"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class park extends Model {
    static associate(models) {
      park.belongsTo(models.city);
      park.hasMany(models.event);
    }
  }
  park.init(
    {
      imageUrl: DataTypes.STRING,
      name: { type: DataTypes.STRING, allowNull: false },
      lat: { type: DataTypes.FLOAT, allowNull: false },
      lng: { type: DataTypes.FLOAT, allowNull: false },
      cityId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "park",
    }
  );
  return park;
};
