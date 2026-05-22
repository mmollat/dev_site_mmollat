import "./globals.css";
import Navbar from "../components/Navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
