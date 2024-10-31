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
      blue: {
        25: "#F1FEFF",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "blue" })
);

export default theme;
