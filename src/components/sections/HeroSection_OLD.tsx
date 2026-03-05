
import React, { useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 mt-10 overflow-hidden bg-white">
      {/* Modern minimal background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:96px_96px]"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-pinkish-red/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-neon-purple/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pinkish-red/5 border border-pinkish-red/20 mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-pinkish-red" />
              <span className="text-sm font-medium text-pinkish-red">Software & Automation</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Build software that<br/>
              <span className="bg-gradient-to-r from-pinkish-red to-neon-purple bg-clip-text text-transparent">scales your business</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Custom development and automation solutions for growing companies
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-pinkish-red hover:bg-pinkish-red-dark text-white transition-all duration-300"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View work <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
            
            {/* <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-pinkish-red fill-pinkish-red" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  <span className="font-bold">4.9/5</span> from 200+ reviews
                </span>
              </div>
            </div> */}
          </div>

          {/* Hero image */}
          <div 
            className="relative mx-auto max-w-lg lg:max-w-none"
            ref={heroRef}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pinkish-red/50 to-pinkish-red-light/50 rounded-2xl blur opacity-20"></div>
              <div className="relative glass-card p-1 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/photo-1581091226825-a6a2a5aee158.avif" 
                  alt="AI-Driven Solutions" 
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Stats cards */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-xl rounded-xl p-4 border border-gray-200 shadow-lg transition-all duration-300">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-gray-500 text-xs font-medium">Projects</p>
                      <p className="text-pinkish-red font-bold text-xl">250+</p>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <p className="text-gray-500 text-xs font-medium">Clients</p>
                      <p className="text-dark-gray font-bold text-xl">150+</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-xs font-medium">Retention</p>
                      <p className="text-pinkish-red font-bold text-xl">98%</p>
                    </div>
                  </div>
                </div>
                
                {/* Feature cards */}
                <div className="absolute top-5 -right-12 bg-white/95 backdrop-blur-xl rounded-xl p-3 border border-gray-200 shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-pinkish-red/10 flex items-center justify-center mr-3">
                      <Sparkles className="w-5 h-5 text-pinkish-red" />
                    </div>
                    <div>
                      <p className="text-dark-gray font-semibold text-sm">Modern Stack</p>
                      <p className="text-gray-500 text-xs">Latest tech</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 -left-12 bg-white/95 backdrop-blur-xl rounded-xl p-3 border border-gray-200 shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-pinkish-red/10 flex items-center justify-center mr-3">
                      <Star className="w-5 h-5 text-pinkish-red" />
                    </div>
                    <div>
                      <p className="text-dark-gray font-semibold text-sm">Scalable</p>
                      <p className="text-gray-500 text-xs">Built to grow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
