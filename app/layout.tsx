import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bucovina Med - Ambulanță Privată | Servicii Medicale de Urgență 24/7",
  description:
    "Ambulanță privată Bucovina Med - Servicii de transport medical și urgență 24/7 în România. Transport asistat și neasistat, transport între spitale, intervenție rapidă. Echipă medicală profesionistă, apelați +40 771 010 112",
  generator: "v0.app",
  metadataBase: new URL("https://bucovina-med.ro"),
  keywords: [
    "ambulanta privata",
    "transport medical",
    "urgente medicale",
    "servicii medicale",
    "transport pacienti",
    "ambulanta Romania",
    "ambulanta Suceava",
    "ambulanta Gura Humorului",
    "transport asistat",
    "transport medical 24/7",
  ],
  authors: [{ name: "Bucovina Med" }],
  creator: "Bucovina Med",
  publisher: "Bucovina Med",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://bucovina-med.ro",
    siteName: "Bucovina Med - Ambulanță Privată",
    title: "Bucovina Med - Ambulanță Privată | Servicii Medicale de Urgență 24/7",
    description:
      "Servicii de transport medical și urgență 24/7 în România. Echipă medicală profesionistă. Apelați +40 771 010 112",
    images: [
      {
        url: "https://bucovina-med.ro/ambulance_1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ambulanța Bucovina Med - Servicii medicale de urgență",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
