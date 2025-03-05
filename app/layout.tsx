import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/app/providor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reshan's Portfolio |Senior Software Engineer",
  description:
    "Welcome to Reshan's portfolio. I am a Software Engineer specializing in full-stack development, web applications, and modern technologies. Explore my projects and skills.",
  keywords: [
    "Reshan Wijerathna",
    "Software Engineer",
    "Portfolio",
    "Full-Stack Developer",
    "Web Development",
    "React",
    "Laravel",
    "PHP",
    "Next.js",
    "JavaScript",
    "Vuejs",
  ],
  authors: [{ name: "Reshan Wijerathna", url: "https://reshan.dev" }],
  openGraph: {
    title: "Reshan's Portfolio | Software Engineer",
    description:
      "Welcome to Reshan's portfolio. I am a Software Engineer specializing in full-stack development, web applications, and modern technologies.",
    url: "https://reshan.dev",
    siteName: "Reshan's Portfolio",
    images: [
      {
        url: "/profile.jpeg", // Add a high-quality image for social media sharing
        width: 1200,
        height: 630,
        alt: "Reshan's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reshan's Portfolio | Software Engineer",
    description:
      "Welcome to Reshan's portfolio. I am a Software Engineer specializing in full-stack development, web applications, and modern technologies.",
    images: ["/profile.jpeg"], // Add a high-quality image for Twitter sharing
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/profile.jpeg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
