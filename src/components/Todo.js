import React from "react";
import { Mutation } from "react-apollo";
import { TOGGLE_TODO } from "../graphql/queries";

const Todo = ({ id, completed, text }) => (
  <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
    {toggleTodo => (
      <li
        onClick={toggleTodo}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    )}
  </Mutation>
);

export default Todo;
