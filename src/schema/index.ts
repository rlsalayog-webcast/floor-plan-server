export const typeDefs = `#graphql
    scalar JSON

    type Mutation {
        createLandmark(
            name: String!,
            category: String!,
            latitude: String!,
            longitude: String!
        ): Landmark
        
        createFloor(
            landmarkId: ID!,
            level: String!,
            name: String!,
            description: String
        ): Floor

        createArea(
            floorId: ID!,
            x: Float!,
            y: Float!,
            width: Float!,
            height: Float!,
            backgroundColor: String!,
            textColor: String!,
            details: JSON!
        ): FloorPlanArea
    }

    type Query {
        getLandmarks: [Landmark!]!
        getLandmarkById(id: ID!): Landmark
        getFloorByLevel(landmarkId: ID!, level: String!): Floor
    }

    type FloorPlanAreaDetails {
        name: String!
        description: String!
    }

    type FloorPlanArea {
        id: ID!
        x: Float!
        y: Float!
        width: Float!
        height: Float!
        backgroundColor: String!
        textColor: String!
        details: FloorPlanAreaDetails!
    }

    type Floor {
        id: ID!
        level: String!
        name: String!
        description: String
        areas: [FloorPlanArea!]!
    }

    type Landmark {
        id: ID!
        name: String!
        category: String!
        latitude: String!
        longitude: String!
        floorPlans: [Floor!]!
        createdAt: String!
        updatedAt: String!
    }
`;
