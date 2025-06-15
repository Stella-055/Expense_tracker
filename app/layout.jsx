import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expense Tracker",
  keywords: ["Expense Tracker", "Budgeting", "Finance", "Money Management"],
  description: "An expense tracker app to manage your finances effectively.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={ `text-xl ${geistSans.variable} ${geistMono.variable} antialiased`}
        > 
        <Toaster/>
          {children}
          
        </body>
      </html>
    </ClerkProvider>
  );
}