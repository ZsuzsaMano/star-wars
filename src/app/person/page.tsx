"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import client from "../../apollo_client";
import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import Person from "./Person";

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Person />
    </ApolloProvider>
  );
}
