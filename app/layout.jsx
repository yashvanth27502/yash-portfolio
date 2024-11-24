import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientFooter from "@/components/ClientFooter"; // Import the new client-only footer
import Head from "next/head"; // Import the Head component
import { icons } from "lucide-react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Best UIUX Designer Portfolio | Best Graphic Designer Portfolio",
  description: "Yashvanth RV Portfolio – Best UIUX Designer & Freelancer available. Open to Hire ",
  icons:{
    icon:["/favicon.ico?v=4"],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          {/* This path must be relative to the public folder */}
          <link rel="icon" href="/favicon.ico" />
          <meta name="google-site-verification" content="dFReMkHxidrQH1qip6kjCYTlfdwNjIOeCcvVZbK-lns" />
          <meta name="description" content="Yashvanth RV – Freelance Graphic Designer specializing in branding, UI/UX, logo design and creative design. Explore a portfolio of innovative design solutions and work." />
        </Head>
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
        <SpeedInsights />
        <ClientFooter /> {/* Render client-side footer */}
      </body>
    </html>
  );
}
