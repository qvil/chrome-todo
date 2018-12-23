import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { TOGGLE_TODO } from "../graphql/queries";

const SyltedTodo = styled.input`
  border-bottom: 1px solid green;
  padding: 4px;
`;

class Todo extends React.Component {
  state = { todo: this.props.text };
  handleChangeTodo = event => {
    this.setState({ todo: event.target.value });
  };
  render() {
    const { handleChangeTodo } = this;
    const { id, completed } = this.props;
    return (
      <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
        {toggleTodo => (
          <SyltedTodo
            // onClick={toggleTodo}
            style={{
              textDecoration: completed ? "line-through" : "none"
            }}
            value={this.state.todo}
            onChange={handleChangeTodo}
          />
        )}
      </Mutation>
    );
  }
}

export default Todo;
