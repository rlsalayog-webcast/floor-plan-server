export const typeDefs = `#graphql
    scalar JSON

    type Query {
        getLandmarks: [Landmark!]!
        getLandmarkById(id: ID!): Landmark
        getFloorByLevel(landmarkId: ID!, level: String!): Floor
    }

    type LandmarkCoordinates {
        latitude: Float!
        longitude: Float!
    }

    type FloorCoordinates {
        x: Float!
        y: Float!
    }

    type Location {
        address: String!
        city: String!
        country: String!
        coordinates: LandmarkCoordinates!
    }

    type FloorPlanAreaAttributes {
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
        attributes: FloorPlanAreaAttributes!
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
        location: Location!
        description: String
        floor_plans: [Floor!]!
        created_at: String!
        updated_at: String!
    }
`;
