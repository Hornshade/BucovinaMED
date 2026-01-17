import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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
    title:
      "Bucovina Med - Ambulanță Privată | Servicii Medicale de Urgență 24/7",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://bucovina-med.ro/#organization",
        name: "Ambulanța Bucovina Med",
        alternateName: "Bucovina Med",
        legalName: "Bucovina Med SRL",
        url: "https://bucovina-med.ro",
        logo: "https://bucovina-med.ro/logo-v1.png",
        image: [
          "https://bucovina-med.ro/ambulance_1.jpeg",
          "https://bucovina-med.ro/ambulance_2.jpeg",
          "https://bucovina-med.ro/ambulance_3.jpeg",
        ],
        description:
          "Ambulanță privată care oferă servicii medicale de urgență și transport asistat 24/7 în România și internațional. Personal medical format din medici, paramedici certificați, asistenți și ambulanțier, ambulanțe moderne echipate, intervenție rapidă.",
        telephone: "+40771010112",
        email: "bucovinamed@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bulevardul Bucovina, nr. 35",
          addressLocality: "Gura-Humorului",
          addressRegion: "Suceava",
          postalCode: "725300",
          addressCountry: "RO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "47.5529",
          longitude: "25.8973",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [
          "https://www.facebook.com/bucovina.med",
          "https://www.google.com/search?q=Bucovina+Med&stick=H4sIAAAAAAAA_-NgU1I1qDBKTbU0MTZINTNKTUlMtDS2MqgwNbFMsTRPsbAwSTI3SDI2W8TK41SanF-WmZeo4JuaAgDk2nt1OAAAAA&hl=ro",
        ],
        areaServed: [
          { "@type": "City", name: "Suceava" },
          { "@type": "City", name: "Gura Humorului" },
          { "@type": "City", name: "Șcheia" },
          { "@type": "City", name: "Mereni" },
          { "@type": "City", name: "Salcea" },
          { "@type": "City", name: "Huțani" },
          { "@type": "City", name: "Plopeni" },
          { "@type": "City", name: "Fetești" },
          { "@type": "City", name: "Uncești" },
          { "@type": "City", name: "Adâncata" },
          { "@type": "City", name: "Tișăuți" },
          { "@type": "City", name: "Pătrăuți" },
          { "@type": "City", name: "Trei Movile" },
          { "@type": "City", name: "Părhăuți" },
          { "@type": "City", name: "Luncușoara" },
          { "@type": "City", name: "Sfântu Ilie" },
          { "@type": "City", name: "Dărmănești" },
          {
            "@type": "AdministrativeArea",
            name: "Județul Suceava",
            containedInPlace: { "@type": "Country", name: "România" },
          },
          { "@type": "Country", name: "România" },
        ],
        medicalSpecialty: [
          "Emergency Medicine",
          "Emergency Medical Services",
          "Patient Transport",
        ],
        priceRange: "$$",
        hasMap: "https://www.google.com/maps?q=47.5529,25.8973",
      },
      {
        "@type": "WebSite",
        "@id": "https://bucovina-med.ro/#website",
        url: "https://bucovina-med.ro",
        name: "Bucovina Med",
        description:
          "Ambulanță privată și servicii medicale de urgență în România",
        publisher: { "@id": "https://bucovina-med.ro/#organization" },
        inLanguage: "ro-RO",
      },
      {
        "@type": "WebPage",
        "@id": "https://bucovina-med.ro/#webpage",
        url: "https://bucovina-med.ro",
        name: "Bucovina Med - Ambulanță Privată Suceava | Transport Medical 24/7",
        isPartOf: { "@id": "https://bucovina-med.ro/#website" },
        about: { "@id": "https://bucovina-med.ro/#organization" },
        description:
          "Ambulanță privată Bucovina Med oferă servicii medicale de urgență și transport asistat 24/7 în Suceava și toată România",
        inLanguage: "ro-RO",
      },
    ],
  };
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
