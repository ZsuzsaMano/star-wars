"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphQL/apollo_client";
import Character from "./Character";

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Character />
    </ApolloProvider>
  );
}
