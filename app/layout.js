import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/myComponents/Navbar";
import Footer from "@/components/myComponents/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LitLearn",
  description: "Learn Literature with LitLearn",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en" className="light" style={{ colorScheme: "light" }}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="mt-[4.3rem] min-h-screen">
              {children}
              <Toaster />
            </div>
            <Footer />

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
