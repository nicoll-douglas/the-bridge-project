import NextLink from "next/link";
import Wordmark from "./Wordmark";
import { Link } from "@chakra-ui/react";

export default function WordmarkLink({
  size,
  href,
}: {
  size?: number;
  href: string;
}) {
  return (
    <Link as={NextLink} href={href}>
      <Wordmark size={size} />
    </Link>
  );
}
