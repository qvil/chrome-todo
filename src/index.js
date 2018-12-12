import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { ApolloProvider } from "react-apollo";
import client from "./graphql/clientState";

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <>
        <App />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
