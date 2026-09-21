import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Tandartsenpraktijk de Tandenborstel",
  description: "Uw tandartsen praktijk met een vriendelijke glimlach",
  icons: {
    icon: "/logo.svg",
}};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl">
      <body>
      <Navigation />
      {children}
      </body>
    </html>
  );
}
