import React from "react";
import { Query } from "react-apollo";
import { GET_TODOS } from "../graphql/queries";
import Todo from "./Todo";

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos } }) => {
      console.log(todos);
      return !todos || !todos.length ? null : (
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      );
    }}
  </Query>
);

export default TodoList;
