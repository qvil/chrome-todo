import React, { Component } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";
import { Mutation } from "react-apollo";
import { ADD_TODO } from "./graphql/queries";
import TodoList from "./components/TodoList";

const Title = styled.div`
  padding: 0 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

class App extends Component {
  render() {
    let input;

    return (
      <Mutation mutation={ADD_TODO}>
        {addTodo => (
          <div>
            <Title>Today Scrum</Title>
            <Form
              onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { text: input.value } });
                input.value = "";
              }}
            >
              <Input
                ref={node => {
                  input = node;
                }}
                placeholder="Input here"
                fullWidth
              />
              <Button type="submit">Add Todo</Button>
            </Form>
            <TodoList />
          </div>
        )}
      </Mutation>
    );
  }
}

export default App;
