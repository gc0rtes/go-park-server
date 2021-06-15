"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
