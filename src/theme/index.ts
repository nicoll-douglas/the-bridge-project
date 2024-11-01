import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import styles from "./config/styles";
import colors from "./config/colors";
import fonts from "./config/fonts";

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
