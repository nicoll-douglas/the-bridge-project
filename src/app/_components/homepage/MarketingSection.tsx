import { Flex, Heading, Text, Image, Center } from "@chakra-ui/react";
import ReadMoreBtn from "./ReadMoreBtn";

export default function MarketingSection({
  reverse = false,
  id,
  hasNext,
}: {
  reverse?: boolean;
  id: string;
  hasNext?: string;
}) {
  const headingId = crypto.randomUUID();

  return (
    <Center
      height={"100vh"}
      minHeight={"fit-content"}
      py={"73px"}
      px={4}
      flexDir={"column"}
      id={id}
    >
      <Flex
        maxW={{ base: "md", md: "container.md", lg: "container.lg" }}
        maxH={"fit-content"}
        flexDir={{ base: "column", md: reverse ? "row-reverse" : "row" }}
        alignItems={"center"}
        px={{ base: 0, lg: 4 }}
        my={"auto"}
        py={8}
        gap={{ base: 4, md: 12 }}
        as={"section"}
        aria-labelledby={headingId}
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
      </Flex>
      {hasNext && <ReadMoreBtn scrollsTo={hasNext} />}
    </Center>
  );
}
