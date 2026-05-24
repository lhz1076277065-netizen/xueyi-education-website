'use client';

import { ArrowRight, Star } from 'lucide-react';
import { heroContent } from '@/data/content';
import { scrollToSection } from '@/lib/utils';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Placeholder Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-navy-500/20 blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Placeholder image area */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:flex items-center justify-center">
          <div className="w-80 h-80 rounded-full border-2 border-white/10 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                <span className="text-white/40 text-xs text-center leading-relaxed px-8">
                  【图片：右侧装饰图】
                  <br />
                  抽象地球与学位帽
                  <br />
                  几何拼接艺术风格
                  <br />
                  金色与深蓝配色
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Star size={14} className="text-gold-400 fill-gold-400" />
            <span className="text-gold-300 text-sm font-medium">{heroContent.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            {heroContent.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-slide-up">
            {heroContent.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-slide-up">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn-primary text-lg px-10 py-4"
            >
              {heroContent.primaryCta}
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="btn-outline text-lg px-10 py-4"
            >
              {heroContent.secondaryCta}
            </a>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-slide-up">
            {heroContent.trustStats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gold-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
