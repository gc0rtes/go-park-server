"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tagEvent extends Model {
    static associate(models) {
      tagEvent.belongsTo(models.event);
      tagEvent.belongsTo(models.tag);
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
