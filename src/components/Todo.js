import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { TOGGLE_TODO } from "../graphql/queries";
// import { Button } from "../lib/react-qui/build";

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
// const CompleteButton = styled.button``;

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
            {/* <Button /> */}
            {/* <CompleteButton /> */}
            <SyltedTodo
              // onClick={toggleTodo}
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
