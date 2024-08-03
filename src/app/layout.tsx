"use client";
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "next-auth/react";
import { signIn } from "next-auth/react";
import { ModeToggle } from './_components/modeToggle';
export default function RootLayout({
  children,
  params: { session, ...params },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body>
      
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
         

    
      
      </body>
    </html>
    </SessionProvider>
  );
}
