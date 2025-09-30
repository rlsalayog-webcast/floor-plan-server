// Resolvers define how to fetch the types defined in your schema.

import GraphQLJSON from "graphql-type-json";

// This resolver retrieves books from the "books" array above.
export const resolvers = {
    JSON: GraphQLJSON, // 👈 hook up the custom scalar
    Query: {
        getLandmarks: () => [
            /* return your data */
        ],
        getLandmarkById: (_, { id }) => {
            /* return one */
        },
        getFloorByLevel: (_, { landmarkId, level }) => {
            /* return floor */
        },
    },
};
