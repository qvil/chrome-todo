import { GET_TODOS } from "./graphql/queries";

export const saveTodos = cache => {
  const { todos } = cache.readQuery({ query: GET_TODOS });
  const _todos = JSON.stringify(todos);
  try {
    // localStorage.setItem("todos", _todos);
    chrome.storage.local.set({ todos: _todos }, () => {
      console.log(`Set value : ${_todos}`);
    });
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = () => {
  // const todos = localStorage.getItem("todos");
  var todos;
  chrome.storage.local.get(["todos"], result => {
    todos = result;
    console.log(`Get value : ${result}`);
  });
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
