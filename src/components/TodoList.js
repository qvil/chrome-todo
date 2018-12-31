import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_TODOS } from "../graphql/queries";
import Todo from "./Todo";

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data, data: { todos } }) => {
      console.log(data); // Object but has no property
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
