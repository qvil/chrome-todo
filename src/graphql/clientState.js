import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
// import resolvers, { defaults } from "./resolvers";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { getTodos } from "../chrome";

const cache = new InMemoryCache();
const stateLink = withClientState({ cache, typeDefs, resolvers });
const client = new ApolloClient({
  cache,
  link: stateLink,
  initializers: {
    todos: () => getTodos()
  }
});

// client.onResetStore(stateLink.writeDefaults);
client.initQueryManager(); // For fix error: Cannot read property 'queryStore' of undefined

export default client;
