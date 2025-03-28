import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const rye = Poppins({
  subsets: ["latin"],
  weight:["400"]
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rye.className} `}
      >
        {children}
      </body>
    </html>
  );
}
