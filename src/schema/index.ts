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
    }

    type Query {
        getLandmarks: [Landmark!]!
        getLandmarkById(id: ID!): Landmark
        getFloorByLevel(landmarkId: ID!, level: String!): Floor
    }

    type FloorCoordinates {
        x: Float!
        y: Float!
    }

    type FloorPlanAreaDetails {
        name: String!
        description: String!
    }

    type FloorPlanArea {
        id: ID!
        coordinates: FloorCoordinates!
        width: Float
        height: Float
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
        floor_plans: [Floor!]!
        createdAt: String!
        updatedAt: String!
    }
`;
