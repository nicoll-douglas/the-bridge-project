"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme";

export default function Providers(props: React.PropsWithChildren) {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
}
