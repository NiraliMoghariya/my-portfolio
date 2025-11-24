import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />     {/* Header always on top */}
        <main style={{ paddingTop: "80px" }}>
          {children}    {/* Page content */}
        </main>
      </body>
    </html>
  );
}
