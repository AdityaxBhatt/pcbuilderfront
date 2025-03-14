import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pcfit.In",
  description: "Build your dream pc without worrying about compatibility",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto text-lg font-bold text-left">PC Builder</div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-10">
          &copy; {new Date().getFullYear()} PC Builder. All rights reserved.
        </footer>
      </body>
    </html>
  );
}