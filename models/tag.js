"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    static associate(models) {
      tag.belongsToMany(models.event, {
        through: "tagEvents",
        foreignKey: "tagId",
      });
    }
  }
  tag.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return tag;
};
