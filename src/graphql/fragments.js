import gql from "graphql-tag";

export const TODO_FRAGMENT = gql`
  fragment completeTodo on TodoItem {
    completed
  }
`;
