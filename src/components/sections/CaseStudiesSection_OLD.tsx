
import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
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
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Luxury E-Commerce Automation",
      client: "Bliss n Bless",
      description: "Transformed a traditional perfume retailer into a premium digital experience with automated inventory management, AI-powered product recommendations, and seamless WooCommerce integration. Implemented 3D product visualizations and automated email marketing campaigns that increased customer engagement and retention.",
      image: "/lovable-uploads/project1.png",
      category: "E-Commerce & Automation",
      results: [
        { label: "Sales Growth", value: "+156%" },
        { label: "Cart Conversion", value: "+89%" },
        { label: "Time Saved", value: "30hrs/wk" }
      ]
    },
    {
      id: 2,
      title: "Construction Business Automation",
      client: "Concrete Pro",
      description: "Developed a comprehensive digital platform that automated quote generation, project tracking, and customer communications. Integrated automated gallery updates, real-time availability checking, and streamlined the entire booking-to-completion workflow, eliminating manual data entry and reducing administrative overhead.",
      image: "/lovable-uploads/image (55).png",
      category: "Business Automation",
      results: [
        { label: "Admin Time Saved", value: "-65%" },
        { label: "Lead Response Time", value: "-80%" },
        { label: "Project Efficiency", value: "+142%" }
      ]
    },
    {
      id: 3,
      title: "AI-Powered Fitness Platform",
      client: "GymTOX",
      description: "Created an intelligent fitness app that automates personalized workout and nutrition plans based on user goals, progress, and wearable device data. Machine learning algorithms continuously optimize recommendations, while automated progress tracking and notifications keep users engaged and motivated.",
      image: "/lovable-uploads/gymtox.png",
      category: "Mobile & AI Solutions",
      results: [
        { label: "User Retention", value: "+187%" },
        { label: "Goal Achievement", value: "3x Faster" },
        { label: "Engagement Rate", value: "+94%" }
      ]
    },
    {
      id: 4,
      title: "Travel Booking Automation",
      client: "TravelSmooth Pakistan",
      description: "Built a complete travel management ecosystem that automated tour package bookings, hotel reservations, payment processing, and customer itinerary generation. Integrated real-time availability checking, automated confirmation emails, and a customer portal for self-service booking management, scaling from 100 to 10,000+ monthly bookings without increasing staff.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1500&q=80",
      category: "Travel Tech & Automation",
      results: [
        { label: "Booking Automation", value: "80%" },
        { label: "Processing Speed", value: "-92%" },
        { label: "Monthly Bookings", value: "10,000+" }
      ]
    },
    {
      id: 5,
      title: "Automotive Sales Pipeline Automation",
      client: "Haval Society",
      description: "Revolutionized the premium vehicle sales process with automated inventory management, virtual 3D showrooms, intelligent financing calculators, and seamless CRM integration. Automated lead capture, follow-up sequences, and document processing transformed their sales pipeline from a manual, slow process to a streamlined digital experience.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=80",
      category: "Automotive & CRM",
      results: [
        { label: "Lead Conversion", value: "+92%" },
        { label: "Response Time", value: "Hours → Mins" },
        { label: "Sales Cycle", value: "-58%" }
      ]
    },
    {
      id: 6,
      title: "AI Content Creation Automation",
      client: "Marketing Agency",
      description: "Implemented an AI-powered content generation platform that automates marketing copy creation, maintains brand consistency, and generates SEO-optimized content across multiple channels. Integrated with existing workflows to reduce content creation time while improving quality and consistency.",
      image: "/lovable-uploads/aicontent.avif",
      category: "AI & Marketing Automation",
      results: [
        { label: "Time Saved", value: "20hrs/wk" },
        { label: "Content Output", value: "+340%" },
        { label: "Consistency Score", value: "98%" }
      ]
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="py-20  relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pinkish-red/10 border border-pinkish-red/30 mb-6 animate-pulse-light">
            <span className="text-sm font-semibold text-pinkish-red">Proven Business Impact</span>
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-dark-gray leading-tight">
            Real Businesses. Real Automation. <span className='gradient-text-animated'>Real Results.</span>
          </h2>
          <p className="section-subtitle mt-6 text-lg">
            See how our automation solutions have helped businesses eliminate manual tasks, scale operations, and achieve exponential growth without increasing overhead.
          </p>
        </div>

        <div className="relative">
          {/* Case Study Slider */}
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-2xl shadow-2xl glass-card border border-pinkish-red/30 hover:border-pinkish-red/50 transition-all duration-500"
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Side */}
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-pinkish-red hover:bg-pinkish-red/90 ">
                          {study.category}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="p-6 lg:p-10 flex flex-col">
                      <div className="mb-2 text-sm text-gray-600">Client: {study.client}</div>
                      <h3 className="text-2xl font-bold  mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{study.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.results.map((result, index) => (
                          <div
                            key={index}
                            className="text-center p-4 bg-gradient-to-br from-pinkish-red/20 to-pinkish-red/10 rounded-xl border border-pinkish-red/30 hover:border-pinkish-red/60 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <p className="text-gray-600 text-xs font-medium mb-1 group-hover:text-gray-800 transition-colors">{result.label}</p>
                            <p className="text-pinkish-red font-bold text-2xl group-hover:scale-110 transition-transform duration-300">{result.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        className="self-start"
                      >
                        View Full Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between mt-8">
            <div className="flex space-x-1">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-10 h-1.5 rounded-full transition-all ${
                    index === activeSlide ? 'bg-pinkish-red' : 'bg-gray-700'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-10 w-10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-10 w-10"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
