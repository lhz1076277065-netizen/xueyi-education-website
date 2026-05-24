'use client';

import { MessageCircle, FileText, Users, Edit, Plane } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { processContent } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  FileText,
  Users,
  Edit,
  Plane,
};

export default function Process() {
  return (
    <SectionWrapper id="process" className="bg-gray-50">
      <h2 className="section-heading">{processContent.headline}</h2>
      <p className="section-subheading">{processContent.subheadline}</p>
      <div className="gold-line" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />

        {processContent.steps.map((step, idx) => {
          const Icon = iconMap[step.icon];
          return (
            <div key={step.step} className="relative z-10 text-center group">
              {/* Step Number */}
              <div className="w-24 h-24 mx-auto rounded-full bg-white border-2 border-gray-200 group-hover:border-gold-500 group-hover:bg-gold-50 flex flex-col items-center justify-center mb-6 transition-all duration-300 shadow-md">
                <span className="text-2xl font-bold text-gold-500">{step.step}</span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mx-auto rounded-lg bg-navy-900 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300 -mt-2 relative">
                {Icon && <Icon size={20} className="text-white" />}
              </div>

              {/* Title */}
              <h3 className="font-bold text-navy-900 mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
