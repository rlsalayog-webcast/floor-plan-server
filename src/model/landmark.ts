import { DataTypes } from "sequelize";
import sequelize from "../../utils/database";

const Landmark = sequelize.define(
    "Landmark",
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
            allowNull: true,
        },
    },
    {
        paranoid: true, // adds deletedAt for soft deletes
    }
);

export default Landmark;
