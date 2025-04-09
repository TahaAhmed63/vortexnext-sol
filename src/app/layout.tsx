import type { Metadata } from "next"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import Script from 'next/script'

// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Vortex Solution | Virtual Operation For Reliable Tech Excellence",
  description: "Vortex Solution specializes in AI-driven digital marketing solutions, CRM development, web and mobile app development to transform businesses.",
  authors: [{ name: "Vortex Solution" }],
  keywords: ["AI solutions", "digital marketing", "CRM development", "web development", "mobile app development"],
  openGraph: {
    type: "website",
    url: "https://vortexsolution.io/",
    title: "Vortex Solution | Virtual Operation For Reliable Tech Excellence",
    description: "Transform your business with our AI-driven digital marketing and development solutions.",
    images: [{ url: "/lovable-uploads/New Project (22).png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex Solution | Virtual Operation For Reliable Tech Excellence",
    description: "Transform your business with our AI-driven digital marketing and development solutions.",
    images: ["/lovable-uploads/New Project (22).png"],
  },
  icons: {
    icon: "/lovable-uploads/New Project (22).png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/lovable-uploads/New Project (22).png" />
        <link rel="icon" type="image/png" href="/lovable-uploads/New Project (22).png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="google-site-verification" content="JSMGfhWBuH-FljxhJCmsk4xM9aPqDX3WwKAmryAfhyA" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RHMB4WYK8S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RHMB4WYK8S');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  )
}
