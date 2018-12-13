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
      console.log(text);
      cache.writeData({ data });
      return newTodo;
    }
  }
  // Query: {
  //   todos: (_, __, { cache }) => {
  //     console.log(111);
  //     const query = GET_TODOS;
  //     const todo = cache.readQuery({ query });
  //     console.log(todo);
  //     return todo;
  //   }
  // }
};

export default resolvers;
