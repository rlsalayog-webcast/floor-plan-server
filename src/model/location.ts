import { DataTypes } from "sequelize";
import sequelize from "../../utils/database";
import Landmark from "./landmark";

const Location = sequelize.define("Location", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coordinates: {
        type: DataTypes.JSONB,
        allowNull: false,
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
});

export default Location;
