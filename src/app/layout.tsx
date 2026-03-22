import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundSystem from "@/components/BackgroundSystem";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "CareerLens AI",
  description: "Agentic Career Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface overflow-x-hidden font-body">
        <ScrollProgress />
        <Navbar />
        <BackgroundSystem />
        <main className="flex-grow z-10 relative">
          {children}
        </main>
      </body>
    </html>
  );
}

