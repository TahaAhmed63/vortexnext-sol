import React, { useRef } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  results: {
    label: string;
    value: string;
  }[];
}

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "Bliss n Bless",
      description: "Built a premium perfume e-commerce platform with automated inventory management and AI-powered recommendations, resulting in significant sales growth.",
      image: "/lovable-uploads/project1.png",
      category: "E-Commerce",
      results: [
        { label: "Sales Growth", value: "+156%" },
        { label: "Conversion", value: "+89%" },
        { label: "Time Saved", value: "30h/wk" }
      ]
    },
    {
      id: 2,
      title: "Business Automation",
      client: "Concrete Pro",
      description: "Automated quote generation and project tracking system that streamlined operations and reduced administrative overhead significantly.",
      image: "/lovable-uploads/image (55).png",
      category: "Construction",
      results: [
        { label: "Admin Time", value: "-65%" },
        { label: "Response Time", value: "-80%" },
        { label: "Efficiency", value: "+142%" }
      ]
    },
    {
      id: 3,
      title: "Travel Automation",
      client: "TravelSmooth Pakistan",
      description: "Complete travel management platform with automated bookings, payments, and itinerary generation, scaling operations efficiently.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1500&q=80",
      category: "Travel Tech",
      results: [
        { label: "Automation", value: "80%" },
        { label: "Speed", value: "-92%" },
        { label: "Bookings", value: "10K+/mo" }
      ]
    },
    {
      id: 4,
      title: "Automotive Platform",
      client: "Haval Society",
      description: "Premium vehicle sales platform with automated inventory, virtual showrooms, and CRM integration for streamlined operations.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=80",
      category: "Automotive",
      results: [
        { label: "Conversions", value: "+92%" },
        { label: "Response", value: "Minutes" },
        { label: "Sales Cycle", value: "-58%" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Dark background with subtle accents */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#E7107E]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#0FA4EA]/10 rounded-full blur-[120px]"></div>

      <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#E7107E] bg-[#E7107E]/10 rounded-full border border-[#E7107E]/20 mb-8">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Case Studies
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            See how we've helped businesses achieve their goals with custom software solutions
          </p>
        </div>

        {/* Grid layout for case studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large image */}
              <div className="relative h-[350px] lg:h-[400px] overflow-hidden rounded-2xl mb-6 bg-gray-800">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Category badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-[#0F172A] border-0 backdrop-blur-sm font-semibold">
                  {study.category}
                </Badge>

                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[#E7107E] font-semibold mb-2">{study.client}</p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Description and results */}
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx}>
                      <p className="text-xs text-gray-500 mb-1">{result.label}</p>
                      <p className="text-2xl font-bold text-[#E7107E]">{result.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-7 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
