"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attendanceEvent extends Model {
    static associate(models) {
      attendanceEvent.belongsTo(models.user);
      attendanceEvent.belongsTo(models.event);
    }
  }
  attendanceEvent.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      eventId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "attendanceEvent",
    }
  );
  return attendanceEvent;
};
