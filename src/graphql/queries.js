import gql from "graphql-tag";

export const GET_TODOS = gql`
  query todos @client {
    id
    text
    completed
  }
`;
