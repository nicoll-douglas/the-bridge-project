import Providers from "@/providers";
import { Background } from "@/features/ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}
