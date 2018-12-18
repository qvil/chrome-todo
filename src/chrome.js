import { GET_TODOS } from "./graphql/queries";

export const saveTodos = cache => {
  const { todos } = cache.readQuery({ query: GET_TODOS });
  try {
    // eslint-disable-next-line no-undef
    chrome.storage.sync.set({ todos }, () => {});
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = () => {
  return new Promise((resolve, reject) => {
    let todos;
    try {
      // eslint-disable-next-line no-undef
      chrome.storage.sync.get(["todos"], res => {
        console.log(res);
        todos = res.todos ? res.todos : [];
      });
    } catch (error) {
      console.error(error);
    }

    resolve(todos);
    // return todos;
    // return [];
  });
};
