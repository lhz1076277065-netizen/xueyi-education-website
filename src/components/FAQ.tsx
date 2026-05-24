'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { faqItems } from '@/data/content';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SectionWrapper id="faq" className="bg-gray-50">
      <div className="flex items-center justify-center gap-3 mb-4">
        <HelpCircle size={32} className="text-gold-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900">常见问题</h2>
      </div>
      <p className="section-subheading">
        关于博士申请、奖学金、服务流程的常见疑问，这里都有答案
      </p>
      <div className="gold-line" />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gold-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-gold-400 font-bold text-lg mt-0.5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-navy-900 group-hover:text-gold-600 transition-colors pr-6">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={cn(
                    'text-gray-400 shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-180 text-gold-500',
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pl-14 text-gray-600 leading-relaxed text-sm">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-400 text-sm mb-4">没有找到你的问题？直接联系我们进行一对一咨询</p>
        <a href="#contact" className="btn-outline-dark text-base">
          免费在线咨询
        </a>
      </div>
    </SectionWrapper>
  );
}
