import { DataTypes } from "sequelize";
import sequelize from "../../utils/database";
import Landmark from "./landmark";

const Floor = sequelize.define(
    "Floor",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        landmark_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Landmark,
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

export default Floor;
