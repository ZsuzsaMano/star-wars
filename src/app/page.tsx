"use client";
import React, { FC } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import client from "../apollo_client";

import { Squad } from "../components/Squad";
import { SearchBox } from "../components/SearchBox";
import { People } from "../components/People";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center max-w-5xl mx-auto p-4">
        <Squad />
        <SearchBox />
        <People />
      </main>
    </ApolloProvider>
  );
}
