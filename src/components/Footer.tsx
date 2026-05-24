'use client';

import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { footerContent } from '@/data/content';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-2">{footerContent.companyName}</div>
            <p className="text-xs text-white/40 tracking-widest uppercase mb-4">
              {footerContent.companyNameEn}
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {footerContent.description}
            </p>
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <MapPin size={16} />
              <span>{footerContent.contact.address}</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-6 text-white/80">
              我们的服务
            </h4>
            <ul className="space-y-3">
              {footerContent.services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(s.href);
                    }}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-6 text-white/80">
              快速链接
            </h4>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: QR Codes */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-6 text-white/80">
              关注我们
            </h4>
            <div className="flex gap-4 mb-6">
              <div className="w-28 h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-center">
                <span className="text-white/30 text-[10px] leading-relaxed px-2">
                  公众号
                  <br />
                  二维码
                </span>
              </div>
              <div className="w-28 h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-center">
                <span className="text-white/30 text-[10px] leading-relaxed px-2">
                  客服微信
                  <br />
                  二维码
                </span>
              </div>
            </div>
            <p className="text-white/40 text-xs">{footerContent.qrPlaceholder}</p>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>{footerContent.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>{footerContent.contact.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={14} />
            <span>微信：{footerContent.contact.wechat}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} {footerContent.companyName} All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
