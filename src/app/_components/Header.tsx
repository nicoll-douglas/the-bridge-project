import { Flex } from "@chakra-ui/react";
import { ToggleThemeBtn } from "@/features/ui/themes";
import ResourceLinks from "@/components/common/ResourceLinks";
import ButtonLink from "@/components/common/ButtonLink";
import { WordmarkLink } from "@/components/wordmark";
import { MobileMenu } from "@/app/_components/mobile-menu";

export default function Header() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      p={4}
      minWidth={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      backdropFilter={"blur(10px)"}
      as={"header"}
      zIndex={1000}
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
