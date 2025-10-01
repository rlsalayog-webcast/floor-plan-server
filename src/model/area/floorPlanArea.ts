import { DataTypes } from "sequelize";
import sequelize from "../../../utils/database";
import Floor from "../floor";

const FloorPlanArea = sequelize.define(
    "FloorPlanArea",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        x: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        y: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        backgroundColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        textColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        floorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Floor,
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

export default FloorPlanArea;
