'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { contactContent } from '@/data/content';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-20 z-40 flex flex-col gap-3">
      {/* Back to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300"
          aria-label="回到顶部"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* WeChat */}
      <a
        href={`https://weixin.qq.com`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="微信咨询"
        title={`微信：${contactContent.wechat}`}
      >
        <MessageCircle size={20} />
      </a>

      {/* Phone */}
      <a
        href={`tel:${contactContent.phone}`}
        className="w-11 h-11 rounded-full bg-gold-500 shadow-lg flex items-center justify-center text-white hover:bg-gold-600 transition-all duration-300 hover:scale-110"
        aria-label="电话咨询"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
