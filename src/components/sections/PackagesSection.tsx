"use client"
import React from 'react';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingPackage {
  id: number;
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  popular?: boolean;
}

const PackagesSection = () => {
  const packages: PricingPackage[] = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small businesses just getting started with digital solutions.",
      price: "$999",
      period: "one-time fee",
      features: [
        { title: "Responsive Website Design", included: true },
        { title: "Basic SEO Optimization", included: true },
        { title: "Contact Form Integration", included: true },
        { title: "1 Month Support", included: true },
        { title: "Social Media Integration", included: true },
        { title: "E-commerce Functionality", included: false },
        { title: "Custom CRM Integration", included: false },
        { title: "AI-Powered Analytics", included: false },
      ]
    },
    {
      id: 2,
      name: "Professional",
      description: "Advanced solutions for growing businesses seeking a competitive edge.",
      price: "$2,499",
      period: "one-time fee",
      features: [
        { title: "Responsive Website Design", included: true },
        { title: "Advanced SEO Optimization", included: true },
        { title: "Contact Form Integration", included: true },
        { title: "3 Months Support", included: true },
        { title: "Social Media Integration", included: true },
        { title: "E-commerce Functionality", included: true },
        { title: "Basic CRM Integration", included: true },
        { title: "AI-Powered Analytics", included: false },
      ],
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Comprehensive digital solutions for large organizations with complex needs.",
      price: "$4,999",
      period: "one-time fee",
      features: [
        { title: "Responsive Website Design", included: true },
        { title: "Advanced SEO Optimization", included: true },
        { title: "Contact Form Integration", included: true },
        { title: "6 Months Support", included: true },
        { title: "Social Media Integration", included: true },
        { title: "E-commerce Functionality", included: true },
        { title: "Custom CRM Integration", included: true },
        { title: "AI-Powered Analytics", included: true },
      ]
    }
  ];

  return (
    <section id="packages" className="py-24 lg:py-32 bg-[#F8F9FC] relative">
      <div className="container max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#E7107E] bg-white rounded-full border border-[#E7107E]/20 mb-6">
            Our Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            Choose the Perfect Package
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Select the package that best fits your business needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 relative shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border ${
                pkg.popular
                  ? 'border-[#E7107E]'
                  : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#E7107E] text-white px-6 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-5 h-12 leading-relaxed text-sm">{pkg.description}</p>

                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-[#E7107E]">{pkg.price}</span>
                    <span className="text-gray-500 ml-2 mb-1">/{pkg.period}</span>
                  </div>
                </div>

                <Button
                  className={`w-full mb-8 py-6 font-semibold text-sm uppercase tracking-wide rounded-full transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-[#E7107E] hover:bg-[#c00e6b] text-white'
                      : 'bg-white border-2 border-[#E7107E] text-[#E7107E] hover:bg-[#E7107E] hover:text-white'
                  }`}
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-[#0F172A]">Features included:</h4>
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="rounded-full p-0.5 bg-[#E7107E] mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="rounded-full p-0.5 bg-gray-200 mt-0.5 flex-shrink-0">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Need a custom solution? We offer tailored packages to meet your specific requirements
          </p>
          <Button
            className="bg-[#E7107E] hover:bg-[#c00e6b] text-white font-semibold text-sm uppercase px-10 py-7 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
