"use client";
import React, { FC, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../graphQL/apollo_client";

import { Squad } from "../components/Squad";
import { SearchBox } from "../components/SearchBox";
import { PersonProps } from "@/types/shared.types";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center max-w-5xl mx-auto p-4">
        <Squad />
        <SearchBox />
      </main>
    </ApolloProvider>
  );
}
