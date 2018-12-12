import { GET_TODOS } from "./queries";

const resolvers = {
  Query: {
    todos: (_, variables, { cache }) => {
      const query = GET_TODOS;
      const todo = cache.readQuery({ query });
      return todo;
    }
  }
  // Mutation: {
  //   addTodo: (_, { text }, { cache }) => {
  //     const query = GET_TODOS;
  //     const notes = cache.readQuery({ query });
  //     console.log(notes);
  //     return notes;
  //   }
  // }
};

export default resolvers;
