import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
