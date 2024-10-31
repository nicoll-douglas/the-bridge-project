"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ToggleThemeBtn() {
  const { colorMode, setColorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={isLight ? <MoonIcon /> : <SunIcon />}
      onClick={() => setColorMode(isLight ? "dark" : "light")}
      variant={"outline"}
    />
  );
}
