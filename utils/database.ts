import path from "path";
import { Sequelize } from "sequelize";

const dbPath = path.resolve(process.cwd(), "database.sqlite");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath,
    logging: false,
});

export const connectDB = async (callback: () => void) => {
    try {
        await sequelize.authenticate();
        console.log("✅ Connected to database successfully!");
        await syncDB();
        await callback();
    } catch (error) {
        console.error("❌ Unable to connect to the database:", error);
    }
};

const syncDB = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("✅ Database & tables synced!");
    } catch (error) {
        console.error("❌ Error syncing database:", error);
    }
};

export default sequelize;
