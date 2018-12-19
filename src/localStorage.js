import { GET_TODOS } from "./graphql/queries";

export const saveTodos = cache => {
  const { todos } = cache.readQuery({ query: GET_TODOS });
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    try {
      return JSON.parse(todos);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  return [];
};
