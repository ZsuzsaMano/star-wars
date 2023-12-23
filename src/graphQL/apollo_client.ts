import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://fe-case-study.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
