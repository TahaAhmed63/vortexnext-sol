import React, { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Luxuries Perfume Brand Bliss n Bless",
      description: "A premium e-commerce platform featuring stunning 3D product visualizations, immersive animations, and a fully responsive design that showcases luxury perfumes with elegant transitions and interactive elements. Automated inventory management and customer engagement increased sales by 156%.",
      image: "/lovable-uploads/project1.png",
      technologies: ["Next Js", "TypeScript", "Tailwindcss", "WooCommerce API"],
      githubUrl: "https://github.com/TahaAhmed63/bliss-n-bless",
      liveUrl: "https://www.blissnbless.shop/",
      featured: true
    },
    {
      id: 2,
      title: "Concrete Pro",
      description: "A professional website showcasing concrete and sealing solutions for residential and commercial properties, featuring automated project galleries, real-time quote generation, and customer testimonials. Streamlined their booking process reducing admin time by 65%.",
      image: "/lovable-uploads/image (55).png",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://concrete-canvas-build.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "GymTOX",
      description: "A mobile fitness and nutrition app that automates personalized workout plans, nutrition tracking, and seamless integration with wearable devices. AI-powered recommendations helped users achieve 3x faster fitness goals.",
      image: "/lovable-uploads/gymtox.png",
      technologies: ["React Native", "Node.js", "Supabase", "AI/ML"],
      githubUrl: "https://github.com/TahaAhmed63/gym_app",
      featured: true
    },
    {
      id: 4,
      title: "TravelSmooth Pakistan",
      description: "A comprehensive travel booking and management platform automating tour packages, hotel reservations, and customer itineraries. Integrated payment gateway and automated booking confirmations reduced manual processing by 80% while scaling to 10,000+ monthly bookings.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1500&q=80",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe API"],
      liveUrl: "https://travelsmooth.com.pk/",
      featured: true
    },
    {
      id: 5,
      title: "Haval Society",
      description: "Premium automotive dealership platform featuring automated inventory management, virtual showroom tours, financing calculators, and CRM integration. Streamlined the sales pipeline increasing lead conversion by 92% and reducing response time from days to minutes.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=80",
      technologies: ["React", "TypeScript", "CRM Integration", "3D Rendering"],
      liveUrl: "https://havalsociety.com/",
      featured: true
    },
    {
      id: 6,
      title: "Smart Home IoT Platform",
      description: "An integrated system for managing connected devices with real-time monitoring and automated responses. Reduced energy consumption by 40% through intelligent automation.",
      image: "/lovable-uploads/smarthome.avif",
      technologies: ["Python", "MQTT", "React", "AWS IoT"],
      liveUrl: "https://example.com",
      featured: false
    },
    {
      id: 7,
      title: "Blockchain Supply Chain Tracker",
      description: "A transparent supply chain management system built on blockchain technology for verification and traceability. Automated compliance tracking reduced audit time by 70%.",
      image: "/lovable-uploads/blockchain.avif",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      id: 8,
      title: "AI Content Generator",
      description: "An intelligent content creation tool that leverages natural language processing to automate marketing copy generation, saving businesses 20+ hours per week while maintaining brand consistency.",
      image: "/lovable-uploads/aicontent.avif",
      technologies: ["Python", "GPT-4", "React", "FastAPI"],
      githubUrl: "https://github.com",
      featured: true
    }
  ];

  // Show only projects with live URLs
  const filteredProjects = projects.filter(project => project.liveUrl || project.githubUrl);
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


  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#F8F9FC] relative overflow-hidden" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 section-fade-in">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#E7107E] bg-[#E7107E]/5 rounded-full border border-[#E7107E]/20 mb-8">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-8">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of custom software solutions built for ambitious companies
          </p>
        </div>


        {/* Projects Grid - Altar.io style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large project image - Altar.io style (800x464) */}
              <div className="relative h-[350px] lg:h-[400px] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category badge */}
                {project.technologies[0] && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0F172A] text-xs font-semibold rounded-full">
                    {project.technologies[0]}
                  </div>
                )}
              </div>

              {/* Project info */}
              <div className="space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0F172A] group-hover:text-[#E7107E] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* View case study link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#E7107E] font-semibold hover:underline transition-all duration-200 group-hover:translate-x-1"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
