import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complex App Blueprint",
  description:
    "Guidance for building complex web applications and strategies for managing large codebases."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
