import { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Inicio | GetMoved",
  icons: [{ rel: "shortcut icon", url: "favicon.png" }],
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
