import Area from "./area";
import Floor from "./floor";
import Landmark from "./landmark";
import Location from "./location";

const associations = () => {
    Landmark.hasOne(Location, { as: "location", foreignKey: "landmark_id" });
    Location.belongsTo(Landmark, { foreignKey: "landmark_id" });

    Landmark.hasMany(Floor, { as: "floor_plans", foreignKey: "landmark_id" });
    Floor.belongsTo(Landmark, { foreignKey: "landmark_id" });

    Floor.hasMany(Area, { as: "areas", foreignKey: "floor_id" });
    Area.belongsTo(Floor, { foreignKey: "floor_id" });
};

export default associations;
