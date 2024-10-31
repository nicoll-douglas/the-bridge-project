"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps, useColorMode } from "@chakra-ui/react";

export default function ToggleThemeBtn(
  props?: Omit<IconButtonProps, "aria-label">
) {
  const { colorMode, setColorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={isLight ? <MoonIcon /> : <SunIcon />}
      onClick={() => setColorMode(isLight ? "dark" : "light")}
      variant={"ghost"}
      {...props}
    />
  );
}
