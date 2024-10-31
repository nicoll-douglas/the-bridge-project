"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function Providers(props: React.PropsWithChildren) {
  return <ChakraProvider>{props.children}</ChakraProvider>;
}
