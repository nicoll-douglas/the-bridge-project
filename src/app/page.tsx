import Header from "@/app/_components/Header";
import { Center } from "@chakra-ui/react";
import Hero from "./_components/Hero";
import ReadMoreBtn from "./_components/ReadMoreBtn";
import MarketingSection from "./_components/MarketingSection";

export default function Home() {
  return (
    <>
      <Header />
      <Center
        py={"72px"}
        height={"100dvh"}
        flexDir={"column"}
        minHeight={"fit-content"}
        px={4}
      >
        <Hero />
        <ReadMoreBtn scrollsTo="#section-2" hasText />
      </Center>
      <MarketingSection id="section-2" hasNext="#section-3" reverse />
      <MarketingSection id="section-3" hasNext="#section-4" />
      <MarketingSection id="section-4" reverse />
    </>
  );
}
