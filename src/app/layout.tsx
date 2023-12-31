import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import "@/styles/index.css";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://outstatic.com"),
  title: {
    default: "Орігамі в Україні / Origami Ukraine",
    template: "%s | Орігамі в Україні / Origami Ukraine",
  },
  description: "Новини та історія орігамі в Україні",
  openGraph: {
    title: "Орігамі в Україні / Origami Ukraine",
    description: "Новини та історія орігамі в Україні",
    url: absoluteUrl("/"),
    siteName: "Next.js",
    images: [
      {
        url: absoluteUrl("/images/og-image.png"),
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon/favicon-32x32.png" }],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  // @ts-ignore
  // console.log(children?.props.childProp, searchParams, params);
  // const headersList = headers();
  // const pathname = headersList.get("x-invoke-path");
  // console.log(Object.fromEntries(headersList.entries()));

  // const isLayoutNeeded = !pathname?.startsWith("/outstatic");
  // const LayoutComponent = isLayoutNeeded ? FrontendLayout : React.Fragment;
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
