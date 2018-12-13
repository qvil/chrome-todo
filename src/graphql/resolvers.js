import { GET_TODOS } from "./queries";

const resolvers = {
  Query: {
    todos: (_, __, { cache }) => {
      console.log(111);
      const query = GET_TODOS;
      const todo = cache.readQuery({ query });
      console.log(todo);
      return todo;
    }
  },
  Mutation: {
    addTodo: (_, { text }, { cache }) => {
      // const query = GET_TODOS;
      console.log(text);
      const data = {
        todos: { id: 1, text: text, completed: false }
      };
      cache.writeData({ data });
      return 333;
    }
  }
};

export default resolvers;
