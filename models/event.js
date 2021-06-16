"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate(models) {
      event.belongsTo(models.park);

      event.belongsToMany(models.tag, { through: "tagEvents" });

      event.belongsTo(models.user, { as: "owner" });

      event.belongsToMany(models.user, {
        through: "attendanceEvents",
        as: "going",
      });

      event.hasMany(models.commentEvent);
    }
  }
  event.init(
    {
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      phone: DataTypes.INTEGER,
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false },
      lat: { type: DataTypes.FLOAT, allowNull: false },
      lng: { type: DataTypes.FLOAT, allowNull: false },
      isCanceled: { type: DataTypes.BOOLEAN, defaultValue: false },
      parkId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
