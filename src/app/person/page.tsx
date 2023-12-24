"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphQL/apollo_client";
import Person from "./Person";

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Person />
    </ApolloProvider>
  );
}
