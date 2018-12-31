import { GET_TODOS } from "./graphql/queries";

export const saveTodos = cache => {
  const { todos } = cache.readQuery({ query: GET_TODOS });
  const _todos = JSON.stringify(todos);
  try {
    // eslint-disable-next-line no-undef
    chrome.storage.local.set({ todos: _todos }, () => {
      console.log(`Set value : ${_todos}`);
    });
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  // eslint-disable-next-line no-undef
  await chrome.storage.local.get(["todos"], todos => {
    console.log(`Get value : ${JSON.stringify(todos)}`);
    if (todos) {
      try {
        console.log(11);
        return todos;
      } catch (error) {
        console.error(error);
        console.log(22);
        return [];
      }
    }
  });

  console.log(333);
  // return [];
};
