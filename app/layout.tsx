import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with Next.js",
  icons: {
    icon: "/favicons/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />    
        <main >
          {children} 
           <Toaster position="top-right" />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
