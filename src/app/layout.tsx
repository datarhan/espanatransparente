import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EspañaTransparente — Observatorio Electoral y Rendición de Cuentas (PP, PSOE, Vox)",
  description: "Datos oficiales y objetivos sobre partidos políticos en España: votaciones en Congreso, presidencias autonómicas, causas judiciales con sentencia y gestión de emergencias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-zinc-100 text-zinc-900">{children}</body>
    </html>
  );
}

