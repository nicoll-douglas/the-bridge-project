"use client";

import { Box, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Background() {
  const { colorMode } = useColorMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Box
        height={"100dvh"}
        width={"100dvw"}
        position={"fixed"}
        top={0}
        left={0}
        zIndex={-10}
        bg={colorMode === "light" ? "brand.50" : "brand.500"}
      />
    </motion.div>
  );
}
