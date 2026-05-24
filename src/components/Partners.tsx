'use client';

import SectionWrapper from './SectionWrapper';
import { partners } from '@/data/content';

export default function Partners() {
  return (
    <SectionWrapper id="partners">
      <h2 className="section-heading">学员录取院校</h2>
      <p className="section-subheading">
        我们的学员遍布全球顶尖名校，用实力赢得认可
      </p>
      <div className="gold-line" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="aspect-[3/2] rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-4 hover:border-gold-300 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-navy-100 group-hover:bg-gold-100 flex items-center justify-center mb-3 transition-colors">
              <span className="text-navy-400 group-hover:text-gold-500 text-xs font-bold transition-colors">
                {partner.nameZh.slice(0, 2)}
              </span>
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              {partner.nameZh}
            </span>
            <span className="text-[10px] text-gray-300 mt-0.5">{partner.name}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs mt-8">
        【图片说明：上方为大学校徽Logo墙，每所大学使用其官方校徽图片，灰阶处理，hover时彩色显示】
      </p>
    </SectionWrapper>
  );
}
