import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
}

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      name: "Fave",
      category: "Entertainment / SaaS / Mobile App",
      description: "Community-driven gaming platform focused on immersive social features and scalable architecture.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#"
    },
    {
      id: 2,
      name: "Apiax",
      category: "Fintech / SaaS",
      description: "A regulatory compliance platform enabling financial companies to manage digital regulations across jurisdictions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#"
    },
    {
      id: 3,
      name: "Bliss n Bless",
      category: "E-Commerce / Retail",
      description: "Premium perfume e-commerce platform with stunning 3D product visualizations and automated inventory management.",
      image: "/lovable-uploads/project1.png",
      liveUrl: "https://www.blissnbless.shop/"
    },
    {
      id: 4,
      name: "TravelSmooth",
      category: "Travel / SaaS",
      description: "Comprehensive travel booking platform automating tour packages and customer itineraries at scale.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://travelsmooth.com.pk/"
    },
    {
      id: 5,
      name: "Haval Society",
      category: "Automotive / SaaS",
      description: "Premium automotive dealership platform with virtual showrooms and intelligent CRM integration.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://havalsociety.com/"
    },
    {
      id: 6,
      name: "Concrete Pro",
      category: "Construction / B2B",
      description: "Professional construction platform with automated quote generation and project management tools.",
      image: "/lovable-uploads/image (55).png",
      liveUrl: "https://concrete-canvas-build.vercel.app/"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="container max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              The projects we've brought to life
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'border-[#E7107E] text-[#E7107E] hover:bg-[#E7107E] hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'border-[#E7107E] text-[#E7107E] hover:bg-[#E7107E] hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[380px] snap-start group"
            >
              {/* Project Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                {/* Image Area */}
                <div className="relative h-[220px] overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {project.name}
                  </h3>

                  {/* Category Label */}
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-medium">
                    {project.category}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#E7107E] text-[#E7107E] hover:bg-[#E7107E] hover:text-white rounded-full py-6 font-semibold transition-all duration-200"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      See case study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
