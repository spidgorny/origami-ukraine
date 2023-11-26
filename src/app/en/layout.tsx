import "../styles/index.css";
import React from "react";
import { FrontendLayout } from "@/app/frontend-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FrontendLayout>{children}</FrontendLayout>
      </body>
    </html>
  );
}
