import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georgian Blue Water | Well Drilling & Water Systems",
  description:
    "Modern well drilling, pump systems, water treatment, inspections, and emergency water service across Simcoe County and Georgian Bay communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
