import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import LightRays from "@/components/LightRays";
import { Analytics } from "@vercel/analytics/next";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRC Training Tracker",
  description: "Tracker for MIT CRC Machine Trainings",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}>
        <NavBar/>
        <div className={"absolute inset-0 top-0 z-[-1] min-h-screen"}>
          <LightRays
              raysOrigin="top-center"
              raysColor="#ff0000"
              raysSpeed={0.1}
              lightSpread={1.4}
              rayLength={1000}
              followMouse={false}
              mouseInfluence={0}
              noiseAmount={0}
              distortion={0}
              pulsating={false}
              fadeDistance={3}
              saturation={1}
          />
        </div>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
