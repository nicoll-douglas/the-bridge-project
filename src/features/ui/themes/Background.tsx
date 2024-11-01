"use client";

import { useAccent } from "@/hooks";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Background() {
  const accentColor = useAccent({ invert: true });

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
        bg={accentColor}
      />
    </motion.div>
  );
}
