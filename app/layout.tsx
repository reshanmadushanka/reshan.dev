import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";

import "./globals.css";
import { ThemeProvider } from "@/app/providor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://reshan.dev"),
  title: {
    default: "Reshan's Portfolio | Senior Software Engineer",
    template: "%s | Reshan.dev",
  },
  description:
    "Reshan Wijerathna is a Senior Software Engineer specializing in Laravel, Vue.js, Next.js, React, PHP, and full-stack web applications.",
  keywords: [
    "Reshan Wijerathna",
    "Senior Software Engineer",
    "Laravel Developer",
    "Vue.js Developer",
    "Next.js Developer",
    "React Developer",
    "PHP Developer",
    "Full-Stack Developer",
    "Web Application Developer",
    "Portfolio",
  ],
  authors: [{ name: "Reshan Wijerathna", url: "https://reshan.dev" }],
  openGraph: {
    title: "Reshan Wijerathna | Senior Software Engineer",
    description:
      "Senior Software Engineer building modern web experiences with Laravel, Vue.js, Next.js, React and PHP.",
    url: "https://reshan.dev",
    siteName: "Reshan.dev",
    images: [
      {
        url: "https://reshan.dev/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Reshan Wijerathna portfolio image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reshan Wijerathna | Senior Software Engineer",
    description:
      "Senior Software Engineer building modern web experiences with Laravel, Vue.js, Next.js, React and PHP.",
    images: ["https://reshan.dev/profile.jpeg"],
  },
  alternates: {
    canonical: "https://reshan.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "url": "https://reshan.dev",
                  "name": "Reshan's Portfolio",
                  "description":
                    "Senior Software Engineer building modern web applications with Laravel, Vue.js, Next.js, React and PHP.",
                },
                {
                  "@type": "Person",
                  "name": "Reshan Wijerathna",
                  "url": "https://reshan.dev",
                  "jobTitle": "Senior Software Engineer",
                  "sameAs": [
                    "https://github.com/reshan-wijerathna",
                    "https://www.linkedin.com/in/reshan-wijerathna",
                    "https://twitter.com/reshan_w",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
