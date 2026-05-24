'use client';

import { useState } from 'react';
import { MapPin, ArrowRight, Quote } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { successStories, storyFilters } from '@/data/content';

export default function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? successStories
      : successStories.filter((s) => s.tags.includes(activeFilter));

  return (
    <SectionWrapper id="cases">
      <h2 className="section-heading">成功案例</h2>
      <p className="section-subheading">
        2000+学员的真实录取故事，每一个梦想都值得全力以赴
      </p>
      <div className="gold-line" />

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {storyFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === f.value
                ? 'bg-navy-900 text-white shadow-lg'
                : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((story) => (
          <div key={story.name} className="card group overflow-hidden p-0">
            {/* Placeholder image */}
            <div className="placeholder-img h-48 rounded-none text-xs leading-relaxed">
              {story.placeholderImage}
            </div>

            <div className="p-6">
              {/* University & Program */}
              <div className="flex items-center gap-2 text-gold-600 text-sm font-medium mb-2">
                <MapPin size={14} />
                <span>{story.universityZh}</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">{story.program}</h3>
              <p className="text-gold-600 font-semibold text-sm mb-3">{story.scholarship}</p>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote size={24} className="absolute -top-1 -left-1 text-gold-200" />
                <p className="text-gray-500 text-sm leading-relaxed pl-6 italic">
                  {story.quote}
                </p>
              </div>

              {/* Student name */}
              <div className="flex items-center justify-between">
                <span className="text-navy-900 font-semibold text-sm">{story.name}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-gold-600 hover:text-gold-700 text-sm font-medium transition-colors"
                >
                  查看详情
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-navy-50 text-navy-500 text-xs px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="#contact" className="btn-outline-dark">
          开始你的申请之旅
          <ArrowRight size={18} />
        </a>
      </div>
    </SectionWrapper>
  );
}
