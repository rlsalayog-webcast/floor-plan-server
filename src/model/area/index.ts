import { DataTypes } from "sequelize";
import sequelize from "../../../utils/database";
import Floor from "../floor";

const Area = sequelize.define(
    "Area",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
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
        floor_id: {
            type: DataTypes.UUID,
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

export default Area;
