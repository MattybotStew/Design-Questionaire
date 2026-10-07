import "./globals.css";

export const metadata = {
  title: "Design Questionnaire",
  description: "A short questionnaire to understand your design preferences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
