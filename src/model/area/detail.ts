import { DataTypes } from "sequelize";
import Area from ".";
import sequelize from "../../../utils/database";

const AreaDetails = sequelize.define(
    "AreaDetails",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area_id: {
            type: DataTypes.UUID,
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
