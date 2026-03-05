import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight mb-8">
              Custom Software
              <br />
              Development
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              We build custom web and mobile applications that help businesses automate processes, scale operations, and achieve their goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#E7107E] hover:bg-[#c00e6b] text-white font-bold text-sm uppercase px-10 py-7 rounded-full transition-all duration-200"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-[#0F172A] hover:bg-gray-50 font-semibold px-10 py-7 rounded-full transition-all duration-200"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">250+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="w-full h-auto"
              />
              {/* Accent card overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E7107E] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A]">Quality Guaranteed</div>
                    <div className="text-sm text-gray-600">Trusted by 150+ companies worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-[#E7107E] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              #1 Rated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
