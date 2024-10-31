import { Flex, Heading, Text } from "@chakra-ui/react";
import CallToActionBtn from "./CallToActionBtn";
import Image from "next/image";

export default function Hero() {
  return (
    <Flex maxW={"container.lg"} maxH={"fit-content"} alignItems={"center"}>
      <Flex gap={2} flexDir={"column"} alignItems={"start"}>
        <Heading size={"2xl"} lineHeight={1.2}>
          Freelance project management has never been so easy.
        </Heading>
        <Text fontSize={"lg"}>
          The Bridge Project is the ultimate platform that aims for effortless
          project management and communication. Whether you&apos;re a freelancer
          or a client, handle task tracking, feedback, file sharing and more—all
          in one place.
        </Text>
        <CallToActionBtn />
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
