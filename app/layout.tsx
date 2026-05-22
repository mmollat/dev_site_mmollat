import "./globals.css";

export const metadata = {
  title: "Ibarra Custom Rods",
  description: "Custom fishing rods built by hand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
