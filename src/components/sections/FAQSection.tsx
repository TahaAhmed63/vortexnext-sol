import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of software do you develop?",
      answer: "We specialize in custom web applications, mobile apps (iOS & Android), SaaS platforms, e-commerce solutions, CRM systems, and enterprise software. Our team has expertise across various industries and can build solutions tailored to your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple MVP might take 8-12 weeks, while a complex enterprise application could take 6-12 months. We provide detailed timelines during the discovery phase and keep you updated throughout development."
    },
    {
      question: "What is your development process?",
      answer: "We follow an Agile methodology with 2-week sprints. This includes discovery & planning, design & prototyping, iterative development with regular demos, testing & QA, deployment, and ongoing support. You'll have full visibility and input throughout the process."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. We have flexible support packages to match your needs, from basic maintenance to dedicated development teams."
    },
    {
      question: "How much does custom software development cost?",
      answer: "Costs vary significantly based on project complexity, features, and timeline. Simple projects start around $25,000, while complex enterprise solutions can range from $100,000+. We provide detailed quotes after understanding your requirements during a free consultation."
    },
    {
      question: "Will I own the source code?",
      answer: "Absolutely. You retain full ownership of all source code, designs, and intellectual property created for your project. We provide complete documentation and can assist with knowledge transfer if needed."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we have extensive experience integrating with third-party APIs, legacy systems, databases, and various software platforms. We ensure seamless data flow and compatibility with your existing technology stack."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern tech stacks including React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, and more. We choose technologies based on your project requirements, scalability needs, and long-term maintenance considerations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about our custom software development services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#E7107E]/30 transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#0F172A] pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#E7107E] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-[#E7107E] font-semibold hover:underline">
            Contact us for more information →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
