import "~/styles/globals.css";

import { type Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";

// import { TRPCReactProvider } from "~/trpc/react"; // Removed unused tRPC provider
import { ThemeProvider } from "~/components/theme-provider";
import { V0Navbar } from "~/components/layout/v0-navbar"; // Import the new V0Navbar

export const metadata: Metadata = {
  title: "Corbent - Turning Air into Stone",
  description: "Revolutionary direct air capture technology using 90% less energy.",
  icons: [{ rel: "icon", url: "https://i.ibb.co/bRRTnbZF/corbent-logo.png" }], // Updated favicon path
};

const fontSans = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Added 500 for medium
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Added 300 (light) and 500 (medium)
  variable: "--font-serif",
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Wrap Navbar and children in a flex-col div */}
          <div className="relative flex min-h-screen flex-col bg-background">
            <header className="sticky top-0 z-50 flex justify-center py-4 backdrop-blur-md bg-background/80 border-b border-border/60">
              <V0Navbar />
            </header>
            <main className="flex-1">{children}</main>
            {/* Consider adding a Footer component here later */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
