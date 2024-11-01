import { MenuItem } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export default function MenuLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <MenuItem as={NextLink} href={href}>
      {children}
    </MenuItem>
  );
}
