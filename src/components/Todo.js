import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { TOGGLE_TODO } from "../graphql/queries";

const Container = styled.div`
  display: flex;
`;

const SyltedTodo = styled.input`
  border-bottom: 1px solid green;
  padding: 4px;
  font-size: 1rem;
  flex: ${props => (props.fullWidth ? 1 : 0)};
`;
/**
 * Todo
 * React-QUI Radio Button
 */
const CompleteButton = styled.button`
  background-color: rgba(255, 255, 255, 1);
  outline: none;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 2px;
  &:hover {
    background-color: rgba(255, 255, 255, 0);
    color: red;
  }
  &:active {
    color: red;
    /* background: #bbb;
    background-color: rgba(255, 255, 255, 0.8); */
  }
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
          <Container>
            <CompleteButton onClick={toggleTodo}>O</CompleteButton>
            <SyltedTodo
              style={{
                textDecoration: completed ? "line-through" : "none"
              }}
              value={this.state.todo}
              onChange={handleChangeTodo}
              fullWidth
            />
          </Container>
        )}
      </Mutation>
    );
  }
}

export default Todo;
