"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.event, { as: "owner" });

      user.belongsToMany(models.event, {
        through: "attendanceEvents",
        as: "going",
      });

      user.hasMany(models.commentEvent);
    }
  }
  user.init(
    {
      imageUrl: { type: DataTypes.STRING },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
