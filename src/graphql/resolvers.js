import { GET_TODOS } from "./queries";
import { TODO_FRAGMENT } from "./fragments";
import { saveTodos, getTodos } from "../chrome";

// export const defaults = {
//   todos: [{ id: 0, text: "first", completed: false, __typename: "TodoItem" }]
// };
export let defaults;
let nextTodoId = 1;

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
      saveTodos(cache);

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
  },
  Query: {
    todos: (_, __, ___) => {
      // defaults = getTodos();
      getTodos().then(res => {
        console.log(res);
        return (defaults = res);
      });
      return null;
    }
  }
};

export default resolvers;
