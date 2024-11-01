"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useAccent } from "@/hooks";

export default function Hero() {
  const accentColor = useAccent();

  return (
    <Flex
      maxW={"container.lg"}
      maxH={"fit-content"}
      alignItems={"center"}
      as={"main"}
    >
      <Flex gap={2} flexDir={"column"} alignItems={"start"}>
        <Heading size={"2xl"} lineHeight={1.2} color={accentColor} as={"h1"}>
          Freelance project management has never been so easy.
        </Heading>
        <Text fontSize={"lg"}>
          The Bridge Project is the ultimate platform that aims for effortless
          project management and communication. Whether you&apos;re a freelancer
          or a client, handle task tracking, feedback, file sharing and more—all
          in one place.
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
        width={475}
        height={475}
        priority={true}
      />
    </Flex>
  );
}
