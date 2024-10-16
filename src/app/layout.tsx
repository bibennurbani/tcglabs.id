import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.js Conf 24",
  description: "Join us for the Next.js Conf on October 24th.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.svg" alt="Next.js Conf 24" className="h-8" />
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <span>Next.js ON</span>
            <Link href="/logout">Log Out</Link>
            <Link href="/ticket">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">My Ticket</button>
            </Link>
          </nav>
        </header>

        <main className="min-h-screen flex justify-center items-center">
          {children}
        </main>

        <footer className="flex justify-between items-center p-4 border-t border-gray-700">
          <div>
            <Link href="/demo">Get a Demo</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Event Terms & Conditions</Link>
          </div>
          <div className="flex space-x-2">
            <Link href="/github">
              <img src="/github.svg" alt="GitHub" />
            </Link>
            <Link href="/vercel">
              <img src="/vercel.svg" alt="Vercel" />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
