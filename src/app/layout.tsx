import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google"; // Using Inter as a placeholder for Kievit

// import { TRPCReactProvider } from "~/trpc/react"; // Removed unused tRPC provider
import { ThemeProvider } from "~/components/theme-provider";
import { Navbar } from "~/components/layout/navbar"; // Import the Navbar

export const metadata: Metadata = {
  title: "Corbent - Turning Air into Stone",
  description: "Revolutionary direct air capture technology using 90% less energy.",
  icons: [{ rel: "icon", url: "/favicon.ico" }], // Consider creating a Corbent favicon
};

// Placeholder for Kievit font (sans-serif) - replace with actual font setup
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Placeholder for Charter font (serif) - replace with actual font setup
// const fontSerif = localFont({
//   src: [ // Assuming you have font files in public/fonts or src/assets/fonts
//     // Update these paths to your actual font files
//     // { path: '../../public/fonts/Charter-Regular.woff2', weight: '400', style: 'normal' },
//     // { path: '../../public/fonts/Charter-Italic.woff2', weight: '400', style: 'italic' },
//     // { path: '../../public/fonts/Charter-Bold.woff2', weight: '700', style: 'normal' },
//   ],
//   variable: "--font-serif",
//   display: "swap", // Good for performance
//   // fallback: ['Georgia', 'Times New Roman', 'serif'] // Optional fallback
// });


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontSans.variable}`} suppressHydrationWarning>{/* Removed fontSerif.variable for now */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children} {/* Removed TRPCReactProvider wrapper */}
          {/* Consider adding a Footer component here later */}
        </ThemeProvider>
      </body>
    </html>
  );
}
