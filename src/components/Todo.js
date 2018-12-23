import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { TOGGLE_TODO } from "../graphql/queries";

const SyltedTodo = styled.div`
  border-bottom: 1px solid green;
  padding: 4px;
`;

const Todo = ({ id, completed, text }) => (
  <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
    {toggleTodo => (
      <SyltedTodo
        onClick={toggleTodo}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </SyltedTodo>
    )}
  </Mutation>
);

export default Todo;
