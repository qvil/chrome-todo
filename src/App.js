import React, { Component } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Query, Mutation } from "react-apollo";
import { GET_TODOS, ADD_TODO } from "./graphql/queries";

const Todos = () => (
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
            <Todos />
          </div>
        )}
      </Mutation>
    );
  }
}

export default App;
