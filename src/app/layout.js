import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image'

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
      <body className="flex flex-col h-screen">
        <nav className="bg-black-600 text-white p-4" style={{flex:1}}>
          <div className="container mx-auto text-lg font-bold " style={{flex:1, justifyContent:"space-between"}}>
            <img src="/logo.png" width={280} height={40} alt="logo image" style={{display:"inline",flex:1}}/>
            <div style={{display:"inline",flex:1, marginLeft:50}}>Builds</div>
            <div style={{display:"inline",flex:1, marginLeft:50}}>Community</div>
            <div style={{display:"inline",flex:1, marginLeft:50}}>Leaderboard</div>
            <div style={{display:"inline",flex:1, marginLeft:50}}>Contact</div>
            <div style={{display:"inline",flex:1, marginLeft:310 ,border: "1px solid ",padding:5,backgroundColor:"yellow",color:"black"}}>Sign up</div>
            <div style={{display:"inline",flex:1, marginLeft:10 ,border: "1px solid white",padding:5}}>Login</div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center sticky top-[100vh]" style={{fill:1}}>
          &copy; {new Date().getFullYear()} PC Builder. All rights reserved.
        </footer>
      </body>
    </html>
  );
}