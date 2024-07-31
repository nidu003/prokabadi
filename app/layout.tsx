import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Nextjs App",
  description: "Nida Sayyed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
