import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Accent blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E7107E]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0FA4EA]/10 rounded-full blur-[120px]"></div>

      <div className="container max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to build your
              <br />
              next project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can help you build custom software that drives real business results.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0" />
                <span className="text-white">Free consultation and project scoping</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0" />
                <span className="text-white">Dedicated development team</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0" />
                <span className="text-white">Transparent pricing and timelines</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0" />
                <span className="text-white">Ongoing support after launch</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#E7107E] hover:bg-[#c00e6b] text-white font-bold text-sm uppercase px-10 py-7 rounded-full transition-all duration-200"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-7 rounded-full transition-all duration-200"
              >
                View Pricing
              </Button>
            </div>
          </div>

          {/* Right content - Contact cards */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E7107E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-3">Get in touch via email for detailed inquiries</p>
                  <a href="mailto:hello@vortexnext.com" className="text-[#E7107E] font-semibold hover:underline">
                    hello@vortexnext.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0FA4EA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-400 mb-3">Chat with our team for quick questions</p>
                  <button className="text-[#0FA4EA] font-semibold hover:underline">
                    Start a conversation →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
