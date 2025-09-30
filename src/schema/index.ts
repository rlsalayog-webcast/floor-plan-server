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

    type FloorPlanElementAttributes {
        name: String!
        description: String!
    }

    type FloorPlanElement {
        id: ID!
        coordinates: FloorCoordinates!
        width: Float
        height: Float
        backgroundColor: String!
        textColor: String!
        attributes: FloorPlanElementAttributes!
    }

    type Floor {
        id: ID!
        level: String!
        name: String!
        description: String
        elements: [FloorPlanElement!]!
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
