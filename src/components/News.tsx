'use client';

import { ArrowRight, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { newsItems } from '@/data/content';

export default function News() {
  return (
    <SectionWrapper id="news" className="bg-gray-50">
      <h2 className="section-heading">新闻动态</h2>
      <p className="section-subheading">
        最新留学资讯、申请攻略与雪姨动态，掌握一手信息
      </p>
      <div className="gold-line" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newsItems.map((item) => (
          <article key={item.title} className="card group overflow-hidden p-0">
            {/* Placeholder image */}
            <div className="placeholder-img h-44 rounded-none text-xs leading-relaxed">
              {item.placeholderImage}
            </div>

            <div className="p-5">
              {/* Meta */}
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gold-50 text-gold-600 text-xs font-medium px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <Calendar size={12} />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {item.summary}
              </p>

              {/* Read more */}
              <span className="inline-flex items-center gap-1 text-gold-600 text-sm font-medium cursor-pointer hover:text-gold-700 transition-colors">
                阅读全文
                <ArrowRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
