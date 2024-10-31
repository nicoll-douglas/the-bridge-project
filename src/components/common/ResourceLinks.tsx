import ButtonLink from "./ButtonLink";
import { Flex, FlexProps } from "@chakra-ui/react";

export default function ResourceLinks(props: FlexProps) {
  return (
    <Flex gap={5} alignItems={"center"} {...props}>
      <ButtonLink href="/about">About</ButtonLink>
      <ButtonLink href="/contact">Contact</ButtonLink>
      <ButtonLink href="/docs">Docs</ButtonLink>
      <ButtonLink href="/your-privacy">Your Privacy</ButtonLink>
      <ButtonLink href="/terms-of-service">Terms of Service</ButtonLink>
    </Flex>
  );
}
