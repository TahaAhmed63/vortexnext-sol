
import React, { ReactNode } from 'react';

interface ServiceFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
}

const ServiceFeature = ({ icon, title, description, image }: ServiceFeatureProps) => {
  return (
    <div className="bg-white p-7 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#E7107E]/10 text-[#E7107E] transition-all duration-300 group-hover:bg-[#E7107E] group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-lg font-bold text-[#0F172A]">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-[15px] mb-4">{description}</p>

        {image && (
          <div className="mt-auto pt-3">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceFeature;
