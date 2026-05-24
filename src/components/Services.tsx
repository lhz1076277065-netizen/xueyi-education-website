'use client';

import { ArrowRight, Check } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { services } from '@/data/content';
import { scrollToSection } from '@/lib/utils';

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-gray-50">
      <h2 className="section-heading">我们的服务</h2>
      <p className="section-subheading">
        从博士全奖申请到语言考试培训，覆盖留学全链条的一站式专业服务
      </p>
      <div className="gold-line" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isFlagship = idx === 0;

          return (
            <div
              key={service.title}
              className={`card group relative overflow-hidden ${
                isFlagship ? 'ring-2 ring-gold-400' : ''
              }`}
            >
              {isFlagship && (
                <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  旗舰服务
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                <Icon className="text-gold-500 group-hover:text-white transition-colors duration-300" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-900 mb-1">{service.title}</h3>
              <p className="text-gold-600 text-sm font-medium mb-3">{service.tagline}</p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy-700">
                    <Check size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Placeholder image */}
              <div className="placeholder-img h-40 mb-5 text-xs">
                {service.placeholderImage}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-sm transition-colors"
              >
                了解更多
                <ArrowRight size={16} />
              </a>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
