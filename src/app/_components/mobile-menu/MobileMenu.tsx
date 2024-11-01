"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  IconButton,
  IconButtonProps,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuLink from "./MenuLink";

export default function MobileMenu(props: Omit<IconButtonProps, "aria-label">) {
  return (
    <Menu>
      <MenuButton
        variant="outline"
        as={IconButton}
        icon={<HamburgerIcon />}
        aria-label="Open menu"
        display={{ base: "flex", xl: "none" }}
        {...props}
      />
      <MenuList>
        <Box display={{ base: "block", md: "none" }}>
          <MenuLink href="/auth/login">Login</MenuLink>
          <MenuLink href="/auth/register">Register</MenuLink>
          <MenuDivider />
        </Box>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
        <MenuLink href="/docs">Docs</MenuLink>
        <MenuLink href="/your-privacy">Your Privacy</MenuLink>
        <MenuLink href="/terms-of-service">Terms of Service</MenuLink>
      </MenuList>
    </Menu>
  );
}
