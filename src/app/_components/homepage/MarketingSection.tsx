import { Flex, Heading, Text, Image, Center } from "@chakra-ui/react";
import { ReadMoreBtnProps } from "../ReadMoreBtn";
import GenericSection from "./GenericSection";

export default function MarketingSection({
  reverse = false,
  id,
  readMore,
}: {
  reverse?: boolean;
  id: string;
  readMore?: ReadMoreBtnProps;
}) {
  const headingId = crypto.randomUUID();

  return (
    <GenericSection
      id={id}
      as={"section"}
      aria-labelledby={headingId}
      gap={{ base: 4, md: 12 }}
      py={8}
      flexDir={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      readMore={readMore}
    >
      <Flex gap={2} flexDir={"column"} alignItems={"start"}>
        <Heading
          fontSize={{ base: "4xl", lg: "5xl" }}
          lineHeight={1.2}
          as={"h2"}
          id={headingId}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
        <Text fontSize={"lg"}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </Flex>
      <Image
        alt="Marketing image"
        src="https://placehold.co/400x350"
        width={{ base: "full", lg: "400px" }}
      />
    </GenericSection>
  );
}
