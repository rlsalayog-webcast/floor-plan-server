import AreaDetails from "./area/areaDetails";
import FloorPlanArea from "./area/floorPlanArea";
import Floor from "./floor";
import Landmark from "./landmark";

const associations = () => {
    Landmark.hasMany(Floor, { as: "floorPlans", foreignKey: "landmarkId" });
    Floor.belongsTo(Landmark, { foreignKey: "landmarkId" });

    Floor.hasMany(FloorPlanArea, { as: "areas", foreignKey: "floorId" });
    FloorPlanArea.belongsTo(Floor, { foreignKey: "floorId" });

    FloorPlanArea.hasOne(AreaDetails, { foreignKey: "areaId" });
    AreaDetails.belongsTo(FloorPlanArea, { foreignKey: "areaId" });
};

export default associations;
