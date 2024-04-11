import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar/navbar";
import Container from "./ui/components/Container/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divyue's Info",
  description:
    "Welcome to my portfolio! Here, innovation meets aesthetics, and passion fuels every project. Whether you need dynamic front end related services, stunning designs, or seamless user experiences, you're in the right place. Let's explore together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
