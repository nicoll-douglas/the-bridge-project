"use client";

import { Flex } from "@chakra-ui/react";
import { ToggleThemeBtn } from "@/features/ui/themes";
import { ButtonLink, ResourceLinks } from "@/components/common";
import { WordmarkLink } from "@/components/wordmark";
import { MobileMenu } from "../mobile-menu";
import { useAccentColor, useIsScrolled } from "@/hooks";

export default function Header() {
  const accentColor = useAccentColor();
  const accentColorInverted = useAccentColor({ invert: true });
  const isScrolled = useIsScrolled();

  return (
    <Flex
      bg={accentColorInverted}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={4}
      minWidth={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      as={"header"}
      zIndex={1000}
      // borderBottomWidth={1}
      // borderColor={isScrolled ? accentColor : "transparent"}
      // style={{ transition: "border-color 1s ease" }}
      boxShadow={isScrolled ? "xl" : "none"}
      style={{ transition: "box-shadow 1s ease" }}
    >
      <WordmarkLink href="/" />
      <ResourceLinks display={{ base: "none", xl: "flex" }} />
      <Flex alignItems={"center"}>
        <Flex
          alignItems={"center"}
          gap={5}
          display={{ base: "none", md: "flex" }}
        >
          <ButtonLink href="/auth/login">Login</ButtonLink>
          <ButtonLink href="/auth/register" variant="solid" activeStyle>
            Register
          </ButtonLink>
        </Flex>
        <ToggleThemeBtn ml={2} />
        <MobileMenu ml={2} />
      </Flex>
    </Flex>
  );
}
