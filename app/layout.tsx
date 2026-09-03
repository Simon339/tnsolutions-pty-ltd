import type React from "react"
import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

const BASE_URL = "https://www.tnsolution.co.za"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Magotlho TN Solutions (PTY) LTD | Electrical, Solar & Security Services",
    template: "%s | Magotlho TN Solutions",
  },
  description:
    "Magotlho TN Solutions (PTY) LTD — professional electrical, solar, security, HVAC and plumbing services. Serving Gauteng since 2021 with quality supply, installation & maintenance.",
  keywords: [
    "electrical services",
    "solar installation",
    "electric fence",
    "CCTV installation",
    "gate motor",
    "house wiring",
    "plumbing",
    "HVAC",
    "air conditioning",
    "COC certificate",
    "Gauteng",
    "South Africa",
    "Magotlho TN Solutions",
  ],
  authors: [{ name: "Magotlho TN Solutions (PTY) LTD" }],
  creator: "Magotlho TN Solutions (PTY) LTD",
  publisher: "Magotlho TN Solutions (PTY) LTD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: BASE_URL,
    siteName: "Magotlho TN Solutions",
    title: "Magotlho TN Solutions (PTY) LTD | Electrical, Solar & Security Services",
    description:
      "Professional electrical, solar, security, HVAC and plumbing services in Gauteng, South Africa. Quality supply, installation & maintenance since 2021.",
    images: [
      {
        url: "/TN_logo.png",
        width: 1200,
        height: 630,
        alt: "Magotlho TN Solutions — Professional Electrical & Supply Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magotlho TN Solutions (PTY) LTD",
    description:
      "Professional electrical, solar, security, HVAC and plumbing services in Gauteng, South Africa.",
    images: ["/TN_logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/TN_logo.png", type: "image/png" },
    ],
    apple: "/TN_logo.png",
  },
  category: "Electrical Services",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Magotlho TN Solutions (PTY) LTD",
  image: `${BASE_URL}/TN_logo.png`,
  url: BASE_URL,
  telephone: "+27835585199",
  email: "Info@magotlhotnsolutions.co.za",
  address: {
    "@type": "PostalAddress",
    addressRegion: "North West",
    addressCountry: "ZA",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100086507600571",
  ],
  description:
    "Professional electrical, solar, security, HVAC and plumbing services. Supply, installation and maintenance.",
  foundingDate: "2021",
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -26.2041,
      longitude: 28.0473,
    },
    geoRadius: "100000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical & Supply Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Wiring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fault Finding and Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Distribution Board Installations and Upgrades" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting Installation and Upgrades" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspections and Testing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Certificate of Compliance (COC)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential, Commercial, and Industrial Electrical Work" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Electrical Call-Out" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical General Maintenance and Upgrades" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar & Backup Power Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar PV System Installations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inverter Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Storage System Installations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar System Upgrades and Extensions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Systems Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Fault Finding and Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Fence Maintenance and Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Fence Energiser Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Fence Fault Finding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Fence System Upgrades" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Fence Testing and Inspection" } },
      // { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alarm & CCTV Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Motor Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control Automation (Biometric, RFID, and Keypad Systems)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial HVAC Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stationery Supply" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Equipment" } },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen font-dm-sans">
        {children}
      </body>
    </html>
  )
}