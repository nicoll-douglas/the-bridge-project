import { Center, Flex, FlexProps } from "@chakra-ui/react";
import ReadMoreBtn, { ReadMoreBtnProps } from "./ReadMoreBtn";

interface GenericSectionProps extends FlexProps {
  id?: string;
  readMore?: ReadMoreBtnProps;
}

export default function GenericSection({
  id,
  children,
  readMore,
  ...rest
}: GenericSectionProps) {
  return (
    <Center
      height={"100dvh"}
      minHeight={"fit-content"}
      py={"73px"}
      flexDir={"column"}
      px={4}
      id={id}
    >
      <Flex
        maxW={{ base: "md", md: "container.md", lg: "container.lg" }}
        maxH={"fit-content"}
        alignItems={"center"}
        px={{ base: 0, lg: 4 }}
        my={"auto"}
        {...rest}
      >
        {children}
      </Flex>
      {readMore && <ReadMoreBtn {...readMore} />}
    </Center>
  );
}
