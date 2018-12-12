import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

export const defaults = {
  todos: [{ id: 1, text: "Hello", completed: false }]
};

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: withClientState({ cache, typeDefs, resolvers, defaults })
});

export default client;
