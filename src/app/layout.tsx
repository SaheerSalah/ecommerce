import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import Container from "@/components/ui/Container";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "E Commerce",
  description: "E Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className}  ${roboto.variable}`} >
        <ThemeProvider>
          <Navbar />
          {/* {children} */}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
