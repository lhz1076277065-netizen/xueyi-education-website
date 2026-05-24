'use client';

import { GraduationCap, BadgeDollarSign, Eye, Package } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { whyChooseUs } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  BadgeDollarSign,
  Eye,
  Package,
};

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="about" dark>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
        {whyChooseUs.headline}
      </h2>
      <p className="text-white/50 text-lg text-center mt-4 max-w-2xl mx-auto">
        {whyChooseUs.subheadline}
      </p>
      <div className="gold-line" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
        {whyChooseUs.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.value}</div>
            <div className="text-white/50 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Differentiators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {whyChooseUs.differentiators.map((d) => {
          const Icon = iconMap[d.icon];
          return (
            <div key={d.title} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center shrink-0">
                {Icon && <Icon size={24} className="text-gold-400" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{d.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder image */}
      <div className="mt-16 placeholder-img h-64 max-w-3xl mx-auto text-xs">
        {whyChooseUs.placeholderImage}
      </div>
    </SectionWrapper>
  );
}
