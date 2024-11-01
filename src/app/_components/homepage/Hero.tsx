"use client";

import { Flex, Heading, Text, Image, Center, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useAccentColor } from "@/hooks";
import ReadMoreBtn from "../ReadMoreBtn";

export default function Hero() {
  const accentColor = useAccentColor();

  return (
    <Center
      py={"73px"}
      height={"100dvh"}
      flexDir={"column"}
      minHeight={"fit-content"}
      px={4}
    >
      <Flex
        maxW={{ base: "md", md: "container.md", lg: "container.lg" }}
        maxH={"fit-content"}
        alignItems={"center"}
        as={"main"}
        px={{ base: 0, lg: 4 }}
        my={"auto"}
        py={{ base: 24, md: 12 }}
      >
        <Flex gap={2} flexDir={"column"} alignItems={"start"}>
          <Heading
            fontSize={{ base: "4xl", lg: "5xl" }}
            lineHeight={1.2}
            color={accentColor}
            as={"h1"}
          >
            Freelance project management has never been so easy.
          </Heading>
          <Text fontSize={"lg"}>
            The Bridge Project is the ultimate platform that aims for effortless
            project management and communication. Whether you&apos;re a
            freelancer or a client, handle task tracking, feedback, file sharing
            and more—all in one place.
          </Text>
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
        </Flex>
        <Image
          alt="Hero image"
          src="/hero-image.svg"
          width={{ base: "320px", md: "350px", lg: "475px" }}
          display={{ base: "none", md: "block" }}
        />
      </Flex>
      <ReadMoreBtn scrollsTo="#section-2" hasText />
    </Center>
  );
}
