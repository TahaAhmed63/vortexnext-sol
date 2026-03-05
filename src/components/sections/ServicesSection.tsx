import React, { useRef, useEffect } from 'react';
import { Brain, Users, Code, TrendingUp, Server, Smartphone, ArrowRight, Video, Search, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  linkTo: string;
}

const ServiceCard = ({ icon, title, description, delay, linkTo }: ServiceCardProps) => {
  return (
    <Link href={linkTo}>
      <div
        className="group relative bg-[#F8F9FC] p-8 lg:p-10 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer h-full border border-transparent hover:border-[#E7107E]/20 hover:shadow-lg"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="relative flex flex-col h-full">
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white text-[#E7107E] shadow-sm">
            {icon}
          </div>
          <h3 className="mb-4 text-2xl font-bold text-[#0F172A]">{title}</h3>
          <p className="mb-6 text-gray-600 leading-relaxed flex-grow text-base">{description}</p>
          <div className="flex items-center text-[#E7107E] font-semibold text-sm group-hover:underline">
            Learn more
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Solutions",
      description: "Intelligent systems that process data, automate decisions, and scale operations efficiently.",
      linkTo: "/services/ai-solutions"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Data-driven campaigns and automation tools to reach your audience and drive conversions.",
      linkTo: "/services/digital-marketing"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Services",
      description: "Technical optimization and content strategy to improve search rankings and organic traffic.",
      linkTo: "/services/seo"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks for performance and scalability.",
      linkTo: "/services/web-development"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Maintenance & Support",
      description: "Ongoing updates, security patches, and monitoring to keep your platform running smoothly.",
      linkTo: "/services/website-maintenance"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps designed for iOS and Android devices.",
      linkTo: "/services/mobile-app-development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Teams",
      description: "Skilled developers working as an extension of your team on long-term projects.",
      linkTo: "/services/dedicated-developer"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Production",
      description: "Explainer videos and animations that communicate your product's value clearly.",
      linkTo: "/services/video-animation"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "CRM Development",
      description: "Custom CRM solutions tailored to your sales process and customer management needs.",
      linkTo: "/services/crm-development"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#E7107E] bg-[#E7107E]/5 rounded-full border border-[#E7107E]/20 mb-8">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-8">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Full-stack development services to help you build, launch, and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
              linkTo={service.linkTo}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="bg-[#E7107E] hover:bg-[#c00e6b] text-white font-bold text-sm uppercase px-10 py-7 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
