"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tagEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tagEvent.init(
    {
      tagId: { type: DataTypes.INTEGER, allowNull: false },
      eventId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "tagEvent",
    }
  );
  return tagEvent;
};
