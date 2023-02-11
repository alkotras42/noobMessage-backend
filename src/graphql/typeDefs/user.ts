import {gql} from 'apollo-server-core';

const typeDefs = gql`
    type User {
        id: ID,
        username: String,
    }

    type createUserNameResponse {
        success: Boolean,
        error: String
    }

    type Query {
        searchUsers(username: String): [User] 
    }

    type Mutation {
        createUsername(username: String): createUserNameResponse
    }

`;

export default typeDefs
