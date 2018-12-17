import React from "react";
import { Query } from "react-apollo";
import { GET_TODOS } from "../graphql/queries";

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos } }) => {
      return (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);
export default TodoList;
