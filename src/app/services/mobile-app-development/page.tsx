'use client';

import React, { useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, Server, Smartphone, Tablet, Zap, Shield, Globe, Palette, Cpu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ServicePageLayout from '@/components/layout/ServicePageLayout';

import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

export default function MobileAppDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
        
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
            icon: <Smartphone className="w-7 h-7" />,
            title: "Cross-Platform Development",
            description: "Build once, deploy everywhere with iOS and Android compatibility.",
        },
        {
            icon: <Zap className="w-7 h-7" />,
            title: "High Performance",
            description: "Optimized code for smooth, fast-running mobile applications.",
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "Security First",
            description: "Built-in security features to protect user data and privacy.",
        },
        {
            icon: <Globe className="w-7 h-7" />,
            title: "Offline Functionality",
            description: "Apps that work seamlessly with or without internet connection.",
        },
        {
            icon: <Palette className="w-7 h-7" />,
            title: "Custom UI/UX Design",
            description: "Beautiful, intuitive interfaces tailored to your brand.",
        },
        {
            icon: <Cpu className="w-7 h-7" />,
            title: "API Integration",
            description: "Seamless integration with backend services and third-party APIs.",
        }
    ];


    const basicFeatures: PricingFeature[] = [
        { text: "Native iOS or Android app", included: true },
        { text: "Basic UI/UX design", included: true },
        { text: "User authentication", included: true },
        { text: "Push notifications", included: true },
        { text: "Basic API integration", included: true },
        { text: "App store submission", included: true },
        { text: "3 months support", included: true },
        { text: "Advanced features", included: false },
        { text: "Custom animations", included: false },
        { text: "Analytics integration", included: false }
    ];

    const premiumFeatures: PricingFeature[] = [
        { text: "All Basic Package features", included: true },
        { text: "Both iOS and Android apps", included: true },
        { text: "Advanced UI/UX design", included: true },
        { text: "Custom animations", included: true },
        { text: "Analytics integration", included: true },
        { text: "Offline functionality", included: true },
        { text: "12 months support", included: true }
    ];

    const metaKeywords = "Mobile App Development, iOS Development, Android Development, Cross-Platform Apps, App Development Services, Custom Mobile Apps, Mobile App Design, App Development Packages, Mobile Technologies, App Store Submission";

    return (
        <ServicePageLayout
            title="Mobile App Development"
            description="Transform your ideas into powerful mobile applications"
            metaKeywords={metaKeywords}
            heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        >
            <section className="py-24 lg:py-32 bg-white">
                <div className="container max-w-7xl mx-auto px-8 lg:px-16 section-fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
                            App Development Features
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Create powerful, user-friendly mobile applications for your business
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

            <section className="py-24 lg:py-32 bg-[#F8F9FC] section-fade-in">
                <div className="container max-w-7xl mx-auto px-8 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
                            Development Packages
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Affordable solutions for your mobile app needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <PricingPackage
                            title="Basic App Package"
                            price="$8,000 USD"
                            period="one-time"
                            description="Perfect for MVPs and simple applications"
                            features={basicFeatures}
                            ctaText="Get Started"
                        />

                        <PricingPackage
                            title="Premium App Package"
                            price="$15,000 USD"
                            period="one-time"
                            description="Full-featured applications for both platforms"
                            features={premiumFeatures}
                            ctaText="Contact Us"
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-32 bg-white section-fade-in">
                <div className="container max-w-7xl mx-auto px-8 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
                            Development Technologies
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Built with modern mobile technologies
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Mobile Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">React Native</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Flutter</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Swift</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Kotlin</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Firebase</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">AWS</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[#0F172A] mt-8 mb-4">Backend Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Node.js</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">MongoDB</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">GraphQL</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">REST APIs</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Socket.io</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Redis</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                                    alt="Mobile App Development Process"
                                    className="rounded-2xl w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <QuoteFormSection />
        </ServicePageLayout>
    );
}
