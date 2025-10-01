import Area from "./area";
import AreaDetails from "./area/detail";
import Floor from "./floor";
import Landmark from "./landmark";

const associations = () => {
    Landmark.hasMany(Floor, { as: "floorPlans", foreignKey: "landmarkId" });
    Floor.belongsTo(Landmark, { foreignKey: "landmarkId" });

    Floor.hasMany(Area, { as: "areas", foreignKey: "floorId" });
    Area.belongsTo(Floor, { foreignKey: "floorId" });

    Area.hasOne(AreaDetails, { foreignKey: "areaId" });
    AreaDetails.belongsTo(Area, { foreignKey: "areaId" });
};

export default associations;
