import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ironbark Training | Dave Conway",
  description: "Movement. Longevity. Follow-through. Premium health and longevity coaching for men over 40.",
  keywords: ["health coaching", "longevity", "mobility", "men's health", "yoga", "cardiovascular health"],
  authors: [{ name: "Dave Conway" }],
  openGraph: {
    title: "Ironbark Training | Dave Conway",
    description: "Movement. Longevity. Follow-through. Premium health and longevity coaching for men over 40.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
