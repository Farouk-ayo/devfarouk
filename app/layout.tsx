import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farouk Mustapha | Frontend Engineer Portfolio",
  description:
    "Farouk Mustapha is a Frontend Engineer specializing in building WebApps with React, Next.js, and TypeScript. Explore my portfolio to see my work, experiences, and skills in creating engaging web experiences.",
  keywords: [
    "Farouk Mustapha",
    "Farouk",
    "dev",
    "Dev Farouk",
    "devfarouk",
    "Frontend Engineer Portfolio",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Tech Career",
    "Developer in Lagos Nigeria",
    "devfarouk",
    "Frontend Engineer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Shadcn/ui",
    "Chakra UI",
    "Framer Motion",
    "Frontend Development",
    "Portfolio",
    "Web Application Development",
    "Tech Career",
    "Developer in Lagos Nigeria",
    "Pathpalz",
    "Berrystamp",
    "DeepFocus",
    "JustDo Startup",
    "Progressive Web Apps",
    "Mentorship",
    "React Projects",
    "Next.js Projects",
    "Frontend Skills",
    "Tech Collaboration",
    "Web Design",
    "Developer for hire",
    "Open to work",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Farouk Mustapha | Frontend Engineer Portfolio",
    description:
      "Explore the portfolio of Farouk Mustapha, a Frontend Engineer skilled in React, Next.js, and TypeScript. Discover engaging web applications and progressive web app projects.",
    url: "https://devfarouk.vercel.app ",
    type: "website",
    images: [
      {
        url: "https://devfarouk.vercel.app/devfarouk.png",
        alt: " Farouk Mustapha | Frontend Engineer Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farouk Mustapha | Frontend Engineer Portfolio",
    description:
      "Frontend Engineer specializing in building WebApps with React, Next.js, and TypeScript. Discover my works and projects.",
    images: "https://devfarouk.vercel.app/devfarouk.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Providers>
          <SplashScreenManager>
            <Navbar />
            <Sidebar />
            <main className=" px-5 sm:px-12">{children}</main>
            <Copyright />
          </SplashScreenManager>
        </Providers>
        <GoogleAnalytics gaId="G-FHL88G3PMS" />
      </body>
    </html>
  );
}
