import { useColorMode } from "@chakra-ui/react";

export default function useAccentColor(options?: { invert: boolean }) {
  const { colorMode } = useColorMode();
  const match = colorMode === (options?.invert ? "dark" : "light");
  const accentColor = match ? "brand.500" : "brand.50";
  return accentColor;
}
