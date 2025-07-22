import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/theme-provider/ThemeToggle";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Modern dashboard built with Next.js, Tailwind, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeToggle
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeToggle>
      </body>
    </html>
  );
}
