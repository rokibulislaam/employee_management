const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type User {
    _id: ID!
    eid: String
    email: String
    password: String
    firstName: String
    lastName: String
    phone: String
    addrs: String
    designation: String
    type: String
}
input UserInput {
    _id: ID
    eid: String
    email: String
    password: String
    firstName: String
    lastName: String
    phone: String
    addrs: String
    designation: String
    type: String
}
type Update {
    message: String!
}
type Attendence {
    type: String!
    time: String
    eid: ID!
}
type RootQuery {
    users: [User!]!
    getUpdates : [Update!]!
    attendence(eid: ID): [Attendence!]!
}
type RootMutation {
    createUser(userInput: UserInput) : User
    createUpdate(message: String): Update
    createAttendence(type: String!, eid: ID):Attendence
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);
