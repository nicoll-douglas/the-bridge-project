"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useAccentColor } from "@/hooks";

export default function ReadMoreBtn({
  hasText = false,
  scrollsTo,
}: {
  hasText?: boolean;
  scrollsTo: string;
}) {
  const accentColor = useAccentColor();

  function handleClick() {
    document.querySelector(scrollsTo)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Button
      variant={"unstyled"}
      display={"flex"}
      alignItems={"center"}
      flexDir={"column"}
      fontWeight={500}
      size={"lg"}
      color={accentColor}
      onClick={handleClick}
      p={4}
    >
      <Box display={hasText ? "block" : "none"}>Read more</Box>
      <ChevronDownIcon />
    </Button>
  );
}
