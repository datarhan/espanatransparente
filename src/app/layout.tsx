import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EspañaTransparente · Observatorio Parlamentario Cívico e Independiente",
  description: "Fiscalización independiente de las votaciones en el Congreso de los Diputados, pactometría, hemeroteca 'Dicen vs. Votan' y auditoría institucional de partidos en España.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        {children}
      </body>
    </html>
  );
}
