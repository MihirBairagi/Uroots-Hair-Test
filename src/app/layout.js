import "./globals.css";

export const metadata = {
  title: "Uroots Quiz",
  description: "Find your hair's root case in 2 minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
