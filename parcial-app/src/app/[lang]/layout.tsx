import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from './dictionaries'
import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parcial App",
  description: "n.espitiam - parcial app",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}
 
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const {lang} =await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} dict={dict} />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
