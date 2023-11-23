import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
