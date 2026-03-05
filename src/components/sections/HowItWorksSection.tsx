import React, { useRef, useEffect } from 'react';

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = sectionRef.current?.querySelectorAll('.step-card');
    steps?.forEach((step) => observer.observe(step));

    return () => {
      steps?.forEach((step) => observer.unobserve(step));
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Product Scope",
      description: "We begin by defining the product direction, goals, and requirements to build a strong foundation for your project.",
      deliverables: [
        "User Stories",
        "Sitemap",
        "UX Personas",
        "Key KPIs",
        "Tech Spike",
        "Stakeholder Analysis"
      ]
    },
    {
      number: 2,
      title: "Key Screens",
      description: "We focus on designing the most important screens first to define the product's look, feel, and interaction style.",
      deliverables: [
        "UI Concept",
        "Design System"
      ]
    },
    {
      number: 3,
      title: "All Screens",
      description: "After approval of key screens, we expand the design to all necessary screens for the MVP.",
      deliverables: [
        "Full Product UI (UX + UI)"
      ]
    },
    {
      number: 4,
      title: "Development",
      description: "Implementation phase where designs are translated into working product features with continuous collaboration.",
      deliverables: [
        "Programmable Module Delivery",
        "Ongoing Testing and Feedback",
        "Continuous Documentation",
        "Regular Progress Updates"
      ]
    },
    {
      number: 5,
      title: "Test and Launch",
      description: "Thorough testing before release, ensuring stability, quality, and launch readiness.",
      deliverables: [
        "Bug Reports & Fixes",
        "Final Quality Assurance (QA)",
        "User Acceptance Testing (UAT)",
        "Launch Readiness Sign-off"
      ]
    },
    {
      number: 6,
      title: "Iterations and Improvements",
      description: "Post-launch improvements based on user feedback and performance monitoring.",
      deliverables: [
        "User Feedback Reports",
        "Bug Fixes & Technical Improvements",
        "Updated Product Features",
        "Performance Optimization Reports"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9FC]" ref={sectionRef}>
      <div className="container max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 6-step process for delivering successful custom software projects
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gray-300 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Timeline Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[#E7107E] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
                      {/* Step Title */}
                      <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Phase Deliverables */}
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                          Phase Deliverables
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.deliverables.map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <svg
                                className="w-5 h-5 text-[#E7107E] flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-[15px]">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
