import AreaDetails from "../model/area/areaDetails";
import FloorPlanArea from "../model/area/floorPlanArea";
import Floor from "../model/floor";
import Landmark from "../model/landmark";

export const createLandmark = async (_, args, context) => {
    try {
        const landmark = await Landmark.create(args);

        return landmark;
    } catch (err) {
        console.error("Error creating landmark:", err);
    }
};

export const createFloor = async (_, { landmarkId, level, name, description }) => {
    try {
        const landmark = await Landmark.findByPk(landmarkId);
        if (!landmark) throw new Error("Landmark not found");

        const existingFloor = await Floor.findOne({ where: { landmarkId: landmarkId, level } });
        if (existingFloor) throw new Error(`Floor level ${level} already exists for this landmark`);

        const floor = await Floor.create({
            landmarkId: landmarkId,
            level,
            name,
            description,
        });

        return floor;
    } catch (err) {
        console.error("Error creating floor:", err);
        throw new Error("Failed to create floor");
    }
};

export const createArea = async (
    _,
    { floorId, x, y, width, height, backgroundColor, textColor, details }
) => {
    try {
        // make sure floor exists
        const floor = await Floor.findByPk(floorId);
        if (!floor) throw new Error("Floor not found");

        // create area first
        const area = await FloorPlanArea.create({
            floorId,
            x,
            y,
            width,
            height,
            backgroundColor,
            textColor,
        });

        // then create details and link to area
        const areaDetails = await AreaDetails.create({
            name: details.name,
            description: details.description,
            areaId: (area as any).id,
        });

        // attach details in response
        return {
            ...area.get(),
            details: areaDetails.get(),
        };
    } catch (error) {
        console.error("Error creating area:", error);
        throw new Error("Failed to create area");
    }
};
