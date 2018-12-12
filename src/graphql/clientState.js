import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

export const defaults = {
  todos: []
};

const cache = new InMemoryCache();
const stateLink = withClientState({ cache, typeDefs, resolvers, defaults });
const client = new ApolloClient({
  cache,
  link: stateLink
});

// client.onResetStore(stateLink.writeDefaults);
client.initQueryManager(); // For fix error: Cannot read property 'queryStore' of undefined

export default client;
