import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      backgroundColor: mode("blue.25", "blue.900")(props),
      transition: "background-color 0.5s ease",
    },
  }),
};

export default styles;
