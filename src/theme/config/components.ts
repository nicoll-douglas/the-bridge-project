import { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { getAccentColors } from "../utils";

const accentColor = getAccentColors();

const components = {
  Menu: {
    baseStyle: (props: StyleFunctionProps) => ({
      list: {
        bg: mode(accentColor.DARK_MODE, accentColor.LIGHT_MODE)(props),
      },
      item: {
        bg: mode(accentColor.DARK_MODE, accentColor.LIGHT_MODE)(props),
        _hover: {
          bg: mode("brand.100", "whiteAlpha.200")(props),
        },
      },
    }),
  },
};

export default components;
