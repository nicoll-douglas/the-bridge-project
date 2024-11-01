import { useColorMode } from "@chakra-ui/react";
import { getAccentColors } from "@/theme/utils";

export default function useAccentColor(options?: { invert: boolean }) {
  const { colorMode } = useColorMode();
  const accentColor = getAccentColors();

  const isLight = colorMode === (options?.invert ? "dark" : "light");

  return isLight ? accentColor.LIGHT_MODE : accentColor.DARK_MODE;
}
