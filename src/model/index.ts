import Area from "./area";
import AreaDetails from "./area/detail";
import Floor from "./floor";
import Landmark from "./landmark";

const associations = () => {
    Landmark.hasMany(Floor, { as: "floor_plans", foreignKey: "landmark_id" });
    Floor.belongsTo(Landmark, { foreignKey: "landmark_id" });

    Floor.hasMany(Area, { as: "areas", foreignKey: "floor_id" });
    Area.belongsTo(Floor, { foreignKey: "floor_id" });

    Area.hasOne(AreaDetails, { foreignKey: "area_id" });
    AreaDetails.belongsTo(Area, { foreignKey: "area_id" });
};

export default associations;
