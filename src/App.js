import React, { Component } from "react";
import Button from "./components/Button";
import { Mutation } from "react-apollo";
import { ADD_TODO } from "./graphql/queries";

class App extends Component {
  render() {
    let input;

    return (
      <Mutation mutation={ADD_TODO}>
        {(addTodo, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { type: input.value } });
                input.value = "";
              }}
            >
              <input
                ref={node => {
                  input = node;
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
            <h1>TODO</h1>
            <Button>Button</Button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default App;
