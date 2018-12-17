import { GET_TODOS } from "./queries";
import { TODO_FRAGMENT } from "./fragments";

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
    },
    toggleTodo: (_, variables, { cache }) => {
      const id = `TodoItem:${variables.id}`;
      const fragment = TODO_FRAGMENT;
      const todo = cache.readFragment({ fragment, id });
      const data = { ...todo, completed: !todo.completed };
      cache.writeData({ id, data });
      return null;
    }
  }
};

export default resolvers;
