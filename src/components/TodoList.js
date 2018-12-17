import React from "react";
import { Query } from "react-apollo";
import { GET_TODOS } from "../graphql/queries";
import Todo from "./Todo";

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos } }) => {
      return (
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
