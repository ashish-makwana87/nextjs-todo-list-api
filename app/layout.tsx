import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Todo List API",
  description: "Next.js Todo List API for task management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
      <main>
        {children}
      </main>
      <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
