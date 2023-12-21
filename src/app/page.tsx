"use client";
import React, { FC, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import client from "../apollo_client";

import { Squad } from "../components/Squad";
import { SearchBox } from "../components/SearchBox";
import { PersonProps } from "@/types/shared.types";

export default function Home() {
  /**  state of squad */
  const [squad, setSquad] = useState<PersonProps[] | null>([]);
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center max-w-5xl mx-auto p-4">
        <Squad setSquad={setSquad} squad={squad} />
        <SearchBox setSquad={setSquad} squad={squad} />
      </main>
    </ApolloProvider>
  );
}
