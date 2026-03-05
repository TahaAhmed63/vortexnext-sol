"use client"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
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

    // Smooth scroll for anchor links
    const handleSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        });
      });
    };

    handleSmoothScroll();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <ProjectsSection />
        <HowItWorksSection />
        <ServicesSection />
        <TechStackSection />
        <CaseStudiesSection />
        <FAQSection />
        <QuoteFormSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
