import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <h1>I am layout for the app</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
