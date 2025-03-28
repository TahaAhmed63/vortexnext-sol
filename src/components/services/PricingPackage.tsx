import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from 'lucide-react';

export interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPackageProps {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features: PricingFeature[];
  highlighted?: boolean;
  popular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

const PricingPackage = ({
  title,
  price,
  period,
  description,
  features,
  highlighted = false,
  popular = false,
  ctaText = "Get Started",
  onCtaClick
}: PricingPackageProps) => {
  return (
    <div className={`relative group w-full max-w-sm mx-auto`}>
      {/* Gradient border background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500 rounded-2xl -m-0.5 blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
      
      <Card className={`relative h-full transition-all duration-500 hover:scale-[1.02] ${
        highlighted ? 'bg-gradient-to-b from-white to-blue-50' : 'bg-white'
      } ${popular ? 'shadow-xl' : 'shadow-md'} rounded-2xl overflow-hidden backdrop-blur-3xl`}>
        {popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500 text-white px-6 py-1.5 rounded-full shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4" fill="white" />
            <span className="font-medium text-sm whitespace-nowrap">Most Popular</span>
          </div>
        )}
        
        <CardHeader className="space-y-4 text-center pb-6 pt-8 px-4 sm:px-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            {title}
          </h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {price}
            </span>
            {period && (
              <span className="text-base sm:text-lg text-gray-500 ml-1">/{period}</span>
            )}
          </div>
          {description && (
            <p className="text-sm leading-relaxed max-w-sm mx-auto text-gray-600">
              {description}
            </p>
          )}
        </CardHeader>
        
        <CardContent className="flex-grow px-4 sm:px-8 pb-8">
          <ul className="space-y-4 sm:space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className={`rounded-full p-1 mt-0.5 transition-colors duration-300 ${
                  feature.included 
                    ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className={`text-sm transition-colors duration-300 ${
                  feature.included 
                    ? 'text-gray-700' 
                    : 'text-gray-400 line-through'
                }`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="px-4 sm:px-8 pb-8">
          <Button 
            size="lg"
            className={`w-full py-5 sm:py-6 text-sm sm:text-base font-semibold transition-all duration-300 rounded-xl ${
              highlighted || popular
                ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500 hover:opacity-90 text-white shadow-lg shadow-blue-200/50' 
                : 'bg-white border-2 border-transparent hover:border-blue-500 text-blue-600 hover:bg-blue-50'
            }`}
            onClick={onCtaClick || (() => {
              const quoteForm = document.getElementById('quote-form');
              if (quoteForm) {
                quoteForm.scrollIntoView({ behavior: 'smooth' });
              }
            })}
          >
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingPackage;