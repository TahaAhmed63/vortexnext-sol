"use client";
import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import ServiceFeature from '@/components/services/ServiceFeature';
import { Button } from "@/components/ui/button";
import { Video, Mic, Edit, Palette, Play, FileText, PenTool } from 'lucide-react';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

const VideoAnimation = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Function to handle intersection observer for animations
    const handleIntersection = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.15 }
      );

      const sections = document.querySelectorAll(".section-fade-in");
      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    handleIntersection();
  }, []);

  const features = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Scriptwriting",
      description: "Expert scriptwriting services that effectively communicate your message in a clear and engaging manner, ensuring your animated video captivates your audience."
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: "Storyboarding",
      description: "Comprehensive storyboarding to visually plan every scene of your animation, enhancing the storytelling process before production begins."
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Custom Animation",
      description: "Tailored animations designed to align with your brand style, effectively conveying your message and enhancing viewer engagement."
    },
    {
      icon: <Mic className="w-7 h-7" />,
      title: "Professional Voiceover",
      description: "High-quality voiceover services from experienced voice actors, adding depth and professionalism to your animated video."
    },
    {
      icon: <Play className="w-7 h-7" />,
      title: "Background Music",
      description: "Carefully curated background music and sound effects that complement your animation, evoking the right emotions and enhancing viewer experience."
    },
    {
      icon: <Edit className="w-7 h-7" />,
      title: "Revisions",
      description: "Two rounds of revisions included to ensure the final animated product meets your expectations and effectively communicates your message."
    }
  ];

  const process = [
    {
      title: "Discovery & Briefing",
      description: "We start by understanding your business, target audience, and specific goals for the video animation project."
    },
    {
      title: "Script Development",
      description: "Our skilled copywriters create a compelling script that effectively communicates your message and resonates with your audience."
    },
    {
      title: "Storyboarding",
      description: "We develop a detailed visual plan for your animation, mapping out each scene and transition to ensure a smooth production process."
    },
    {
      title: "Style Development",
      description: "Our talented designers craft a unique visual style for your animation, ensuring it aligns with your brand identity and appeals to your audience."
    },
    {
      title: "Animation Production",
      description: "Our expert animators bring the storyboard to life with dynamic and engaging movements, creating a captivating animated video."
    },
    {
      title: "Voiceover & Sound",
      description: "We add professional narration and sound design to enhance your message and create a memorable viewing experience."
    },
    {
      title: "Review & Revisions",
      description: "You will review the animation and provide feedback, allowing for up to two rounds of revisions to perfect the final product."
    },
    {
      title: "Final Delivery",
      description: "Once approved, we deliver your animation in the required formats, optimized for your intended platforms and audience."
    }
  ];

  return (
    <ServicePageLayout
      title="Video Animation Services"
      description="Engage your audience with professional explainer videos and animations that effectively communicate your message."
      metaKeywords="video animation, explainer videos, professional animation services, custom animation, voiceover services"
      metaTitle="Professional Video Animation Services | Engage Your Audience"
      heroImage="https://images.unsplash.com/photo-1574717024453-354a08aab7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    >
      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Video Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Bring your ideas to life with engaging and informative animated videos that captivate your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Explainer Video Package
            </h2>
            <p className="text-lg text-gray-600">
              Professional 60-second animated video to explain your product or service effectively.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-video /50 rounded-xl overflow-hidden border border-pinkish-red/30 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <video 
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/video2.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-3 text-white">60-Second Explainer Video</h3>
                <p className="text-gray-600 mb-4">
                  A professionally crafted animated video that clearly explains your product or service to your target audience, enhancing engagement and conversion.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Custom script and storyboard tailored to your needs</span>
                  </div>
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Professional voiceover to enhance your message</span>
                  </div>
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Music and sound effects that elevate the viewing experience</span>
                  </div>
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Two rounds of revisions to ensure satisfaction</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gradient">$1,200 USD</div>
                  <div className="text-gray-400 text-sm">One-time payment for a high-quality animated video</div>
                </div>
                
                <Button 
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request a Quote for Your Video Animation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Animation Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to creating effective animated videos that resonate with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pinkish-red text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600">{step.title}</h3>
                </div>
                <p className="text-gray-600 pl-14">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection />
    </ServicePageLayout>
  );
};

export default VideoAnimation;
