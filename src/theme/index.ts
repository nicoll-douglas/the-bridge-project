import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import styles from "./config/styles";
import colors from "./config/colors";
import fonts from "./config/fonts";
import components from "./config/components";

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    components,
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
