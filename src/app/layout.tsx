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
  title: "Vortex Solution | Innovative Digital Solutions for Your Business",
  description: "Vortex Solution offers tailored digital strategies, including AI-enhanced marketing, custom CRM solutions, and user-friendly web and mobile applications to elevate your business.",
  authors: [{ name: "Vortex Solution" }],
  keywords: [
    "custom digital solutions", "AI marketing strategies", "tailored CRM systems", "user-friendly web apps", "mobile application development",
    "digital marketing", "e-commerce solutions", "cloud computing", "data analytics", "business intelligence",
    "web development", "mobile app design", "SEO optimization", "content management systems", "social media marketing",
    "UX/UI design", "software development", "IT consulting", "cybersecurity solutions", "digital transformation",
    "branding strategies", "lead generation", "email marketing", "performance marketing", "conversion rate optimization",
    "customer engagement", "data-driven marketing", "business automation", "project management tools", "agile development",
    "enterprise solutions", "SaaS applications", "PaaS solutions", "IaaS services", "API development",
    "e-learning platforms", "online payment systems", "CRM integration", "customer support solutions", "chatbot development",
    "augmented reality applications", "virtual reality solutions", "blockchain technology", "IoT applications", "big data solutions",
    "digital strategy consulting", "market research", "competitor analysis", "user experience testing", "website optimization",
    "mobile-first design", "responsive web design", "progressive web apps", "cross-platform development", "native app development",
    "digital product design", "interactive web experiences", "data visualization", "business process outsourcing", "remote work solutions",
    "digital asset management", "content creation", "influencer marketing", "video marketing", "podcast production",
    "online reputation management", "customer feedback systems", "loyalty programs", "subscription services", "digital advertising",
    "pay-per-click marketing", "retargeting strategies", "web hosting services", "domain registration", "website maintenance",
    "performance tracking", "analytics reporting", "user journey mapping", "customer persona development", "digital ecosystem design"
  ],
  openGraph: {
    type: "website",
    url: "https://vortexsolution.io/",
    title: "Vortex Solution | Innovative Digital Solutions for Your Business",
    description: "Elevate your business with our tailored digital strategies and AI-enhanced solutions.",
    images: [{ url: "/lovable-uploads/New Project (22).png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex Solution | Innovative Digital Solutions for Your Business",
    description: "Elevate your business with our tailored digital strategies and AI-enhanced solutions.",
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
