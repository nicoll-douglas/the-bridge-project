"use client";

import { Image, useColorMode } from "@chakra-ui/react";

export default function Wordmark({ size = 9 }: { size?: number }) {
  const { colorMode } = useColorMode();

  return (
    <Image
      alt="The Bridge Project Wordmark"
      src={
        colorMode === "light"
          ? "/wordmark-light-mode.svg"
          : "/wordmark-dark-mode.svg"
      }
      height={size}
    />
  );
}
