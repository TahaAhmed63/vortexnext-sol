"use client";
import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import { UserPlus, Code, Lightbulb, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

const DedicatedDeveloper = () => {
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
      icon: <UserPlus className="w-7 h-7" />,
      title: "Access to Top Talent",
      description: "Hire pre-vetted developers with expertise in various technologies.",
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Custom Skill Matching",
      description: "Developers matched to your specific project requirements and tech stack.",
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Flexible Engagement",
      description: "Scale your team up or down as needed with flexible contract options.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Time Zone Alignment",
      description: "Developers available in time zones that align with your team's working hours.",
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Direct Communication",
      description: "Seamless communication with your dedicated developer for efficient collaboration.",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance processes to ensure high-quality code.",
    }
  ];


  const basicFeatures: PricingFeature[] = [
    { text: "40 hours per week", included: true },
    { text: "Daily progress reports", included: true },
    { text: "Code review", included: true },
    { text: "Bug fixing", included: true },
    { text: "Basic project management", included: true },
    { text: "Access to standard tech stack", included: true },
    { text: "Direct communication via email", included: true },
    { text: "Priority support", included: false },
    { text: "Access to premium tech stack", included: false },
    { text: "Dedicated project manager", included: false }
  ];

  const premiumFeatures: PricingFeature[] = [
    { text: "All features in the Basic Package", included: true },
    { text: "Priority support", included: true },
    { text: "Access to premium tech stack", included: true },
    { text: "Dedicated project manager", included: true },
    { text: "Flexible working hours", included: true },
    { text: "Advanced code optimization", included: true },
    { text: "Direct communication via Slack/Teams", included: true }
  ];

  const metaKeywords = "dedicated developer, hire developer, software development, custom software solutions, remote developers, tech talent, agile development, project management, quality assurance";

  return (
    <ServicePageLayout
      title="Dedicated Developer Services"
      description="Access skilled developers tailored to your project requirements."
      metaKeywords={metaKeywords}
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    >
      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10 section-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
              Why Hire a Dedicated Developer?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Get access to top talent focused solely on your projects
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

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-[#F8F9FC] relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
              Dedicated Developer Packages
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose the package that best suits your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingPackage 
              title="Basic Package" 
              price="$4,000 USD" 
              period="month"
              description="Ideal for small to medium-sized projects"
              features={basicFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="Premium Package" 
              price="$7,000 USD"
              period="month"
              description="Perfect for large-scale and complex projects"
              features={premiumFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 lg:py-32 bg-white relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
              Technology Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our developers are proficient in a wide range of technologies
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-600 mb-4">Frontend Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">React</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Vue.js</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Angular</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">TypeScript</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Next.js</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Tailwind</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-600 mt-8 mb-4">Backend Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Node.js</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">PHP</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Python</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Java</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">MongoDB</span>
                  </div>
                  <div className="bg-[#E7107E]/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">SQL</span>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Developer working on code" 
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#F8F9FC] relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Answers to common questions about our dedicated developer services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">What is a dedicated developer?</h3>
              <p className="text-gray-600 mb-4">
                A dedicated developer is a software engineer who works exclusively on your projects, providing focused attention and expertise.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">How do you match developers to projects?</h3>
              <p className="text-gray-600 mb-4">
                We carefully assess your project requirements and tech stack to match you with a developer who has the right skills and experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">What if I'm not satisfied with the developer?</h3>
              <p className="text-gray-600 mb-4">
                We offer a satisfaction guarantee. If you're not happy with your developer, we'll find a replacement at no additional cost.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">What communication tools do you use?</h3>
              <p className="text-gray-600 mb-4">
                We use a variety of communication tools, including email, Slack, and video conferencing, to ensure seamless collaboration.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">How do you ensure code quality?</h3>
              <p className="text-gray-600 mb-4">
                We follow industry best practices for code quality, including code reviews, testing, and continuous integration.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">Can I scale my team up or down as needed?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we offer flexible contract options that allow you to scale your team up or down as your project needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormSection />
    </ServicePageLayout>
  );
};

export default DedicatedDeveloper;
