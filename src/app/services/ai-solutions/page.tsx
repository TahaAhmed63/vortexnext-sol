'use client';

import React, { useEffect } from 'react';
import { Brain, Server } from 'lucide-react';
import Image from "next/image";
import ServicePageLayout from '@/components/layout/ServicePageLayout';

import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import QuoteFormSection from '@/components/sections/QuoteFormSection';
import { Bot, Code, ChartBar, CheckCircle } from 'lucide-react';

export default function AiDrivenSolution() {
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
            icon: <Brain className="w-7 h-7" />,
            title: "Machine Learning",
            description: "Advanced ML algorithms for intelligent data processing and pattern recognition.",
        },
        {
            icon: <Bot className="w-7 h-7" />,
            title: "Process Automation",
            description: "Intelligent automation of repetitive tasks and business workflows.",
        },
        {
            icon: <Server className="w-7 h-7" />,
            title: "AI Infrastructure",
            description: "Scalable infrastructure designed for AI/ML workloads and processing.",
        },
        {
            icon: <ChartBar className="w-7 h-7" />,
            title: "Predictive Analytics",
            description: "Data-driven insights and forecasting for informed decision making.",
        },
        {
            icon: <Code className="w-7 h-7" />,
            title: "Custom AI Models",
            description: "Tailored AI solutions built for your specific business needs.",
        },
        {
            icon: <CheckCircle className="w-7 h-7" />,
            title: "AI Integration",
            description: "Seamless integration of AI capabilities into existing systems.",
        }
    ];


    const basicFeatures: PricingFeature[] = [
        { text: "Basic AI automation tools", included: true },
        { text: "Machine learning integration", included: true },
        { text: "Data processing capabilities", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "API access", included: true },
        { text: "5 AI model deployments", included: true },
        { text: "Standard support", included: true },
        { text: "Advanced AI customization", included: false },
        { text: "Custom model training", included: false },
        { text: "Advanced analytics", included: false }
    ];

    const premiumFeatures: PricingFeature[] = [
        { text: "All features in Basic Package", included: true },
        { text: "Unlimited AI model deployments", included: true },
        { text: "Advanced AI customization", included: true },
        { text: "Custom model training", included: true },
        { text: "Advanced analytics & insights", included: true },
        { text: "Full API access", included: true },
        { text: "24/7 Priority support", included: true }
    ];

    const metaKeywords = "AI solutions, machine learning, process automation, AI infrastructure, predictive analytics, custom AI models, AI integration, business automation, AI technologies, enterprise AI solutions";

    return (
        <ServicePageLayout
            title="AI-Driven Solutions"
            description="Transform your business with cutting-edge artificial intelligence and automation"
            metaKeywords={metaKeywords}
            heroImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        >
            <section className="py-24 lg:py-32 bg-white">
                <div className="container max-w-7xl mx-auto px-8 lg:px-16 section-fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
                            AI Features & Benefits
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Discover how our AI solutions can transform your business operations
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
                            AI Solution Packages
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Choose the right AI package for your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <PricingPackage
                            title="Basic AI Package"
                            price="$5,000 USD"
                            period="month"
                            description="Perfect for businesses starting with AI automation"
                            features={basicFeatures}
                            ctaText="Get Started"
                        />

                        <PricingPackage
                            title="Enterprise AI Package"
                            price="$10,000 USD"
                            period="month"
                            description="Advanced AI features for enterprise needs"
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
                            AI Technologies
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Built with cutting-edge AI and ML technologies
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">AI/ML Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">TensorFlow</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">PyTorch</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Scikit-learn</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">OpenAI</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Keras</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">CUDA</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[#0F172A] mt-8 mb-4">Cloud & Infrastructure</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">AWS SageMaker</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Google AI</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Azure ML</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Kubernetes</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">Docker</span>
                                    </div>
                                    <div className="bg-[#E7107E]/10 p-3 rounded-lg text-center">
                                        <span className="text-gray-600">MLflow</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                                    alt="AI Development Process"
                                    width={500}
                                    height={300}
                                    priority
                                    className="rounded-2xl"
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
