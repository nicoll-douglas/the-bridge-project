import NextLink from "next/link";
import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface ButtonLinkProps extends ButtonProps {
  children: React.ReactNode;
  href: string;
  activeStyle?: boolean;
}

export default function ButtonLink({
  children,
  href,
  activeStyle = false,
  ...rest
}: ButtonLinkProps) {
  return (
    <Button
      as={NextLink}
      href={href}
      variant={"link"}
      fontWeight={500}
      {...(activeStyle ? {} : { _active: { color: "inherit" } })}
      {...rest}
    >
      {children}
    </Button>
  );
}
