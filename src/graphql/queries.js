import gql from "graphql-tag";

export const GET_TODOS = gql`
  query todos @client {
    id
    text
    completed
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) @client {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;
