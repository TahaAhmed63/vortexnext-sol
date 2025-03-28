
'use client';
import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import { Code, Smartphone, Globe, Database, Server, Lock } from 'lucide-react';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

const WebDevelopment = () => {
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
      icon: <Code className="w-7 h-7" />,
      title: "Custom Web Development",
      description: "Tailor-made websites designed to meet your specific business needs and goals.",
      // image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Responsive Design",
      description: "Websites that look and function beautifully on all devices, from desktops to smartphones.",
      // image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "E-commerce Solutions",
      description: "Secure, scalable online stores with seamless payment gateway integration."
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Content Management Systems",
      description: "User-friendly CMS implementation allowing you to update your website with ease."
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "Web Application Development",
      description: "Custom web applications that automate processes and enhance productivity."
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Website Security",
      description: "Comprehensive security measures to protect your website and user data."
    }
  ];

  const starterFeatures: PricingFeature[] = [
    { text: "Custom template/theme selection", included: true },
    { text: "Up to 20 product uploads", included: true },
    { text: "Payment gateway integration", included: true },
    { text: "Responsive design", included: true },
    { text: "Home page slider", included: true },
    { text: "Training for website management", included: true },
    { text: "1-month free technical support", included: true },
    { text: "Advanced SEO optimization", included: false },
    { text: "Social media integration", included: false },
    { text: "Custom plugin development", included: false }
  ];

  const businessFeatures: PricingFeature[] = [
    { text: "All features in the Starter Package", included: true },
    { text: "Up to 100 product uploads", included: true },
    { text: "Advanced SEO optimization", included: true },
    { text: "Social media integration", included: true },
    { text: "2 months free technical support", included: true },
    { text: "Custom plugin development", included: false }
  ];

  const enterpriseFeatures: PricingFeature[] = [
    { text: "All features in the Business Package", included: true },
    { text: "Unlimited product uploads", included: true },
    { text: "Custom plugin development", included: true },
    { text: "Priority support with 3 months free technical assistance", included: true }
  ];

  const testimonials = [
    {
      quote: "Working with this team was a game-changer for our business. The website they created not only looks fantastic but has significantly improved our conversion rates.",
      author: "Michael Stevens",
      company: "TechCorp Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The attention to detail and responsive design has made our e-commerce store accessible to customers on all devices. Sales have increased by 45% since the redesign.",
      author: "Emily Johnson",
      company: "Fashion Forward",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
    }
  ];

  return (
    <ServicePageLayout
      title="Web Design & Development"
      description="Custom, responsive websites and applications that drive business growth."
      heroImage="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2339&q=80"
    >
      {/* Features Section */}
      <section className="py-20  relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Custom website solutions designed to showcase your brand and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                // image={feature?.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Headless WordPress Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Headless WordPress Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Transform your existing WordPress site into a lightning-fast, future-proof digital experience
            </p>
            <div className="inline-block bg-electric-blue text-white text-sm font-semibold px-4 py-1 rounded-full mb-8">
              ENTERPRISE-GRADE SOLUTION
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">The Next Generation WordPress Experience</h3>
                <p className="text-gray-600 mb-6">
                  Leverage the power of your familiar WordPress backend with the unmatched performance of Next.js frontend technology. Our headless WordPress solution delivers the best of both worlds—content management flexibility with blazing-fast user experiences.
                </p>
                <p className="text-gray-600 mb-8">
                  By decoupling your WordPress CMS from the frontend presentation layer, we create a seamless architecture that dramatically improves site performance while maintaining all the functionality you rely on.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 text-blue-700">Why businesses are switching to headless:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-electric-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700"><span className="font-semibold">400% faster</span> page load speeds compared to traditional WordPress</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-electric-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700"><span className="font-semibold">60% reduction</span> in bounce rates due to improved performance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 text-electric-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700"><span className="font-semibold">Enhanced security</span> with reduced vulnerability surface area</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Headless WordPress Architecture" 
                  className="rounded-lg w-full shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning-Fast Performance</h3>
              <p className="text-gray-600">
                Next.js delivers pre-rendered pages and optimized code splitting, resulting in sub-second load times and dramatically improved Core Web Vitals scores that boost your SEO rankings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Familiar CMS Experience</h3>
              <p className="text-gray-600">
                Continue using WordPress as your content hub with all your favorite tools—WP Bakery, Gravity Forms, WooCommerce—while delivering content through a modern, secure frontend architecture.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Future-Proof Investment</h3>
              <p className="text-gray-600">
                Reduce long-term development costs with a modular architecture that leverages AI-assisted development, making future enhancements faster and more cost-effective than traditional WordPress.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your WordPress Site?</h3>
                <p className="mb-6 text-blue-50">
                  Our headless WordPress migration service provides a seamless transition that preserves your content and familiar workflows while delivering exceptional performance gains.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-blue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Complete integration of your existing WordPress plugins and functionality</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-blue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Comprehensive training for your team on the new architecture</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-blue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Ongoing support and optimization to maximize your competitive advantage</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <button 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg"
                  onClick={() => {
                    const quoteForm = document.getElementById('quote-form');
                    if (quoteForm) {
                      quoteForm.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get a Free Headless Assessment
                </button>
                <p className="text-sm text-blue-100 mt-4 text-center">
                  Discover how much faster your site could be
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Featured Case Study
            </h2>
            <p className="text-lg text-gray-600">
              See how we helped transform an e-commerce business
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold  mb-4">E-Commerce Platform Redesign</h3>
                <p className="text-gray-600 mb-6">
                  A well-established retail business needed to modernize their online store to improve user experience and increase sales.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Complete redesign with modern UI/UX principles</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Mobile-first approach ensuring perfect responsiveness</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Streamlined checkout process reducing abandonment by 35%</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Integration with multiple payment gateways</span>
                  </div>
                </div>
                <div className="bg-pinkish-red/10 p-4 rounded-lg border border-pinkish-red/30">
                  <p className=" font-medium">Results:</p>
                  <p className="text-gray-600">58% increase in mobile conversions and 42% overall sales growth within 3 months of launch.</p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="E-commerce platform case study" 
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
<QuoteFormSection/>
      {/* Pricing Section */}
      {/* <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Web Development Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the package that best suits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPackage 
              title="Starter Package" 
              price="$800 USD" 
              description="Perfect for small businesses looking to establish an online presence"
              features={starterFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="Business Package" 
              price="$1,500 USD"
              popular={true}
              description="Ideal for growing businesses with more advanced requirements"
              features={businessFeatures}
              ctaText="Choose Business"
            />
            
            <PricingPackage 
              title="Enterprise Package" 
              price="$2,200 USD"
              description="Comprehensive solution for established businesses with complex needs"
              features={enterpriseFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section> */}
    </ServicePageLayout>
  );
};

export default WebDevelopment;
