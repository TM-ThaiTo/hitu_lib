import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "~/components/layout/header";
import { cn } from "~/lib/utils";
import ThemeProvider from "~/components/share/theme-provider";
import Footer from "~/components/layout/footer/footer";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: '../../assets/fonts/CalSans-SemiBold.woff2',
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
