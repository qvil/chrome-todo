const typeDefs = `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }
  type Query {
    todos: [Todo]
  }
`;

export default typeDefs;
