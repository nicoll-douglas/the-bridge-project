"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useAccentColor } from "@/hooks";

export interface ReadMoreBtnProps {
  hasText?: boolean;
  scrollsTo: string;
}

export default function ReadMoreBtn({
  hasText = false,
  scrollsTo,
}: ReadMoreBtnProps) {
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
      {...(hasText ? {} : { "aria-label": "Scroll further" })}
    >
      <Box display={hasText ? "block" : "none"}>Read more</Box>
      <ChevronDownIcon />
    </Button>
  );
}
