"use client";

import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import ResourceLinks from "@/components/common/ResourceLinks";
import { useAccentColor } from "@/hooks";

export default function Footer() {
  const accentColor = useAccentColor();

  return (
    <Box minW={"100%"} borderTopWidth={1} borderTopColor={accentColor}>
      <Flex
        py={12}
        px={4}
        gap={12}
        maxW={"container.lg"}
        mx={"auto"}
        as={"footer"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        alignItems={"start"}
      >
        <Box as="section" aria-labelledby="footer-resources">
          <Heading size={"sm"} mb={4} id="footer-resources">
            Resources
          </Heading>
          <ResourceLinks flexDir={"column"} alignItems={"start"} gap={4} />
        </Box>
        <Text>&#169; 2024 The Bridge Project. All rights reserved.</Text>
        <Box as="section" aria-labelledby="footer-contact">
          <Heading size={"sm"} mb={4} id="footer-contact">
            Contact
          </Heading>
          <Text lineHeight={"normal"}>contact@thebridgeproject.net</Text>
        </Box>
      </Flex>
    </Box>
  );
}
