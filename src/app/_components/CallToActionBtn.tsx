"use client";

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function CallToActionBtn() {
  return (
    <Button
      as={NextLink}
      href={"/auth/register"}
      rightIcon={<ArrowForwardIcon />}
      size={"lg"}
      mt={3}
      fontWeight={500}
    >
      Sign up today
    </Button>
  );
}
