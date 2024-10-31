import Providers from "@/providers";
import { Background } from "@/features/ui/themes";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Background />
          <Box position={"relative"}>{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
