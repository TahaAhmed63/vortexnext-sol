import React, { ReactNode, useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ServicePageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  heroImage?: string;
  serviceImages?: string[];
  metaKeywords?: string; // Added for meta keywords
  metaTitle?: string; // Added for meta title
}

const ServicePageLayout = ({ 
  children, 
  title, 
  description, 
  heroImage,
  serviceImages = [
    "/lovable-uploads/photo-1558346490-a72e53ae2d4f.avif",
    "/lovable-uploads/photo-1460925895917-afdab827c52f.avif",
    "/lovable-uploads/photo-1486312338219-ce68d2c6f44d.avif",
    "/lovable-uploads/photo-1581091226825-a6a2a5aee158 (1).avif"
  ],
  metaKeywords,
  metaTitle
}: ServicePageLayoutProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === serviceImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [serviceImages.length]);

  // Set meta tags if provided
  useEffect(() => {
    if (metaTitle) {
      document.title = metaTitle;
    }
    if (metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = metaKeywords;
      document.head.appendChild(meta);
    }
  }, [metaTitle, metaKeywords]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white"
        >
          <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0F172A] leading-tight">{title}</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#E7107E] hover:bg-[#E7107E]/90 text-white rounded-full px-10 py-7 font-semibold text-base uppercase tracking-wide transition-all duration-200"
                  >
                    Get a Quote
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                    className="border-2 border-[#E7107E] text-[#E7107E] hover:bg-[#E7107E] hover:text-white rounded-full px-10 py-7 font-semibold text-base uppercase tracking-wide transition-all duration-200"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Right Content - Image Carousel */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {serviceImages.map((image, index) => (
                  <div
                    key={image}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-1000",
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <img
                      src={image}
                      alt={`Service showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                ))}
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {serviceImages.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentImageIndex
                          ? "bg-[#E7107E] w-4"
                          : "bg-white/50 hover:bg-white/75"
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        {children}

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-[#0F172A] relative">
          <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 md:p-16 text-center border border-white/10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our services can help your business thrive in the digital landscape.
              </p>
              <Button
                size="lg"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-[#E7107E] hover:bg-[#E7107E]/90 text-white rounded-full px-10 py-7 font-semibold text-base uppercase tracking-wide transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
