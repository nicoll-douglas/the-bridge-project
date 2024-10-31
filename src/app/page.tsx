import Header from "@/app/_components/Header";
import { Center } from "@chakra-ui/react";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Center py={32} height={"100dvh"} minHeight={"fit-content"} px={4}>
        <Hero />
      </Center>
    </>
  );
}
