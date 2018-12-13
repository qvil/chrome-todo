import React, { Component } from "react";
import Button from "./components/Button";
import { Query, Mutation } from "react-apollo";
import { GET_TODOS, ADD_TODO } from "./graphql/queries";

const Todos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading";
      if (error) return `Error : ${error.message}`;

      console.log(data);
      return data.length > 1 ? (
        <ul>
          {data.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ) : null;
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
            <form
              onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { text: input.value } });
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
            <Todos />
            <Button>Button</Button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default App;
