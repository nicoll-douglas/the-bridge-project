import { Flex } from "@chakra-ui/react";
import { ToggleThemeBtn } from "@/features/ui/themes";
import ResourceLinks from "./ResourceLinks";
import ButtonLink from "./ButtonLink";
import { WordmarkLink } from "@/components/wordmark";

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
    >
      <WordmarkLink href="/" />
      <ResourceLinks />
      <Flex alignItems={"center"}>
        <ButtonLink href="/auth/login">Login</ButtonLink>
        <ButtonLink href="/auth/register" variant="solid" activeStyle ml={5}>
          Register
        </ButtonLink>
        <ToggleThemeBtn ml={2} />
      </Flex>
    </Flex>
  );
}