import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import React from "react";

export const metadata: Metadata = {
  title: "Casa del Credito - Muebles y Electrodomésticos en Cuotas",
  description: "Casa del Credito: Muebles y electrodomésticos de calidad con financiamiento hasta en 12 cuotas sin interés. Aprobación en 24hs y entrega gratuita.",
  authors: [{ name: "Casa del Credito" }],
  openGraph: {
    title: "Casa del Credito - Muebles y Electrodomésticos en Cuotas",
    description: "Casa del Credito: Muebles y electrodomésticos de calidad con financiamiento hasta en 12 cuotas sin interés. Aprobación en 24hs y entrega gratuita.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}