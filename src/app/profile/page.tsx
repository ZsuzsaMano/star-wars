"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphQL/apollo_client";
import { Profile } from "./Profile";

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>
  );
}
