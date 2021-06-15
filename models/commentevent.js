"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class commentEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  commentEvent.init(
    {
      comment: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      eventId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "commentEvent",
    }
  );
  return commentEvent;
};
