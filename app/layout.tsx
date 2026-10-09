import type React from "react"
import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

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
    default: "Magotlho TN Solutions (PTY) LTD | Electrical, Solar, Electric Fencing, Access Control & Gate Automation",
    template: "%s | Magotlho TN Solutions",
  },
  description:
    "Magotlho TN Solutions (PTY) LTD — professional electrical, solar, electric fencing, access control, energy metering and gate automation services. Serving Gauteng since 2021 with quality supply, installation & maintenance.",
  keywords: [
    "electrical services",
    "solar installation",
    "electric fence",
    "access control",
    "gate motor",
    "energy metering",
    "prepaid meter installation",
    "house wiring",
    "CCTV",
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
    title: "Magotlho TN Solutions (PTY) LTD | Electrical, Solar, Electric Fencing, Access Control & Gate Automation",
    description:
      "Professional electrical, solar, electric fencing, access control, energy metering and gate automation services in Gauteng, South Africa. Quality supply, installation & maintenance since 2021.",
    images: [
      {
        url: "/TN-logo.png",
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
      "Professional electrical, solar, electric fencing, access control, energy metering and gate automation services in Gauteng, South Africa.",
    images: ["/TN-logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/TN-logo.png", type: "image/png" },
    ],
    apple: "/TN-logo.png",
  },
  category: "Electrical Services",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Magotlho TN Solutions (PTY) LTD",
  image: `${BASE_URL}/TN-logo.png`,
  url: BASE_URL,
  telephone: "+27835585199",
  email: "Info@tnsolution.co.za",
  address: {
    "@type": "PostalAddress",
    addressRegion: "North West",
    addressCountry: "ZA",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100086507600571",
  ],
  description:
    "Professional electrical, solar, electric fencing, access control, energy metering and gate automation services. Supply, installation and maintenance.",
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

      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energy Meter Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prepaid Meter Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Meter Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meter Replacement and Upgrades" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meter Fault Finding and Testing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meter Wiring and Connection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial and Residential Metering Solutions" } },

      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control System Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Magnetic & Electric Locks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keypad/PIN Access Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RFID/Card & Tag Access Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biometric/Fingerprint Access Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial Recognition Access Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatic Gate Access Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office & Commercial Access Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential & Complex Access Systems" } },

      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Automation Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remote Controls and Receivers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keypad and Access-Control Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intercom Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar-Powered Gate Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Motor Repairs and Fault Finding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motor Upgrades and Replacements" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preventative Maintenance" } },
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
      <body className="overflow-x-hidden [&::-webkit-scrollbar]:hidden scrollbar-none [-ms-overflow-style:none] bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen font-dm-sans">
        {children}
        <Toaster position="bottom-right"  className="text-sm text-white border-slate-700/60 bg-slate-900/60"/>
      </body>
    </html>
  )
}