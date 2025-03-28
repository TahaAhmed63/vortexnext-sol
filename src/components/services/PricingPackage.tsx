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
    <Card className={`relative h-full transition-all duration-500 hover:scale-105 ${
      highlighted ? 'bg-gradient-to-b from-white to-blue-50 border-blue-200' : 'bg-white border-gray-100'
    } ${popular ? 'shadow-xl shadow-blue-100' : 'shadow-md'} rounded-2xl overflow-hidden`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-1.5 rounded-full shadow-lg flex items-center gap-2">
          <Star className="w-4 h-4" fill="white" />
          <span className="font-medium text-sm">Most Popular</span>
        </div>
      )}
      
      <CardHeader className="space-y-4 text-center pb-6 pt-8">
        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {price}
          </span>
          {period && (
            <span className="text-lg text-gray-500 ml-1">/{period}</span>
          )}
        </div>
        {description && (
          <p className="text-sm leading-relaxed max-w-sm mx-auto text-gray-600">
            {description}
          </p>
        )}
      </CardHeader>
      
      <CardContent className="flex-grow px-8 pb-8">
        <ul className="space-y-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className={`rounded-full p-1 mt-0.5 transition-colors duration-300 ${
                feature.included 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                <Check className="w-4 h-4" />
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
      
      <CardFooter className="px-8 pb-8">
        <Button 
          size="lg"
          className={`w-full py-6 text-base font-semibold transition-all duration-300 rounded-xl ${
            highlighted || popular
              ? 'bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 text-white shadow-lg shadow-blue-200' 
              : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
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
  );
};

export default PricingPackage;