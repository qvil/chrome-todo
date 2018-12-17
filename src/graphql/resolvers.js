import { GET_TODOS } from "./queries";

export const defaults = {
  todos: []
};

let nextTodoId = 0;

const resolvers = {
  Mutation: {
    addTodo: (_, { text }, { cache }) => {
      const query = GET_TODOS;
      const previous = cache.readQuery({ query });
      const newTodo = {
        id: nextTodoId++,
        text,
        completed: false,
        __typename: "TodoItem"
      };
      const data = {
        todos: previous.todos.concat([newTodo])
      };
      cache.writeData({ data });
      return newTodo;
    }
  }
};

export default resolvers;
