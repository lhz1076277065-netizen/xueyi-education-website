'use client';

import { ArrowRight, Award } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { mentors } from '@/data/content';
import { scrollToSection } from '@/lib/utils';

export default function Mentors() {
  return (
    <SectionWrapper id="mentors" className="bg-gray-50">
      <h2 className="section-heading">导师团队</h2>
      <p className="section-subheading">
        500+位来自世界Top50院校的博士/博士后导师，为你提供最专业的学术指导
      </p>
      <div className="gold-line" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="card group text-center">
            {/* Avatar placeholder */}
            <div className="w-24 h-24 mx-auto rounded-full placeholder-img mb-5 text-[10px] leading-relaxed">
              {mentor.placeholderImage}
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-navy-900 mb-1">{mentor.name}</h3>
            <p className="text-gold-600 text-sm font-medium mb-3">{mentor.title}</p>

            {/* School */}
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
              <Award size={14} className="text-gold-500" />
              <span>{mentor.schoolZh} ({mentor.school})</span>
            </div>

            {/* Field */}
            <p className="text-navy-700 text-sm font-medium mb-4">{mentor.field}</p>

            {/* Expertise */}
            <div className="flex flex-wrap justify-center gap-2">
              {mentor.expertise.map((e) => (
                <span key={e} className="bg-gold-50 text-gold-700 text-xs px-3 py-1 rounded-full">
                  {e}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className="btn-outline-dark"
        >
          预约导师咨询
          <ArrowRight size={18} />
        </a>
      </div>
    </SectionWrapper>
  );
}
