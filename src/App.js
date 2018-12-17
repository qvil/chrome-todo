import React, { Component } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Mutation } from "react-apollo";
import { ADD_TODO } from "./graphql/queries";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    let input;

    return (
      <Mutation mutation={ADD_TODO}>
        {addTodo => (
          <div>
            <h1>GraphQL Todos</h1>
            <form
              onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { text: input.value } });
                input.value = "";
              }}
              style={{ width: 500 }}
            >
              <Input
                ref={node => {
                  input = node;
                }}
                placeholder="Input here"
              />
              <Button type="submit">Add Todo</Button>
            </form>
            <TodoList />
          </div>
        )}
      </Mutation>
    );
  }
}

export default App;
