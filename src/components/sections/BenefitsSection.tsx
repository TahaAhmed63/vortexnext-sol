import React from 'react';
import { Crown, Zap, Target, TrendingUp, DollarSign, Heart } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Crown className="w-5 h-5" />,
      title: "Full Ownership",
      description: "You will own 100% of the software we build with you and you'll never pay subscription or royalty fees."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Flexibility",
      description: "Custom software development allows more flexibility so you can stay agile and responsive to your users' needs."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Competitive Advantage",
      description: "Unique off-the-shelf solutions can't achieve what custom software delivers to differentiate you from competitors."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalability",
      description: "As your business grows, you can scale and add features without rebuilding your product."
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Reduce Long-Term Costs",
      description: "Initial custom development investment can translate into more efficient long-term operations and lower recurring costs."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "User Experience",
      description: "When you build a product using custom software, you create a user-centered experience tailored to your audience."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0F172A] via-[#1a1f3a] to-[#0F172A] relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E7107E]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0FA4EA]/5 rounded-full blur-[120px]"></div>

      <div className="container max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Benefits
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-7 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="w-9 h-9 bg-[#E7107E]/10 rounded-lg flex items-center justify-center mb-5">
                <div className="text-[#E7107E]">
                  {benefit.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
