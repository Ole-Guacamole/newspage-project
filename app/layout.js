import "./globals.css";
import Header from "@/components/main-header/header";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
        <Header />
        {children}
        </div>
      </body>
    </html>
  );
}
