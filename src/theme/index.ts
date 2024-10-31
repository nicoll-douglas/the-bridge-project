import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import styles from "./styles";

const theme = extendTheme(
  {
    styles,
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
    colors: {
      brand: {
        "50": "#f0fbff",
        "100": "#d9f3fe",
        "200": "#EBF8FF", // Fixed
        "300": "#b5d9f0",
        "400": "#7baed8",
        "500": "#1A365D", // Fixed
        "600": "#202f4c",
        "700": "#1a2a3d",
        "800": "#131e2f",
        "900": "#0c1624",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
