"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class commentEvent extends Model {
    static associate(models) {
      commentEvent.belongsTo(models.user);

      commentEvent.belongsTo(models.event);
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
