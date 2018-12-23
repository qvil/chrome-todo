import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_TODOS } from "../graphql/queries";
import Todo from "./Todo";

const Container = styled.div`
  padding: 0 1rem;
`;

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos } }) => {
      return !todos || !todos.length ? null : (
        <Container>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
          ))}
        </Container>
      );
    }}
  </Query>
);

export default TodoList;
