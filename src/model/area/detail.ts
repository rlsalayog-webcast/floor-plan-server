import { DataTypes } from "sequelize";
import Area from ".";
import sequelize from "../../../utils/database";

const AreaDetails = sequelize.define(
    "AreaDetails",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        areaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Area,
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
    },
    {
        paranoid: true, // adds deletedAt for soft deletes
    }
);

export default AreaDetails;
