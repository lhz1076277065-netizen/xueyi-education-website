'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { contactContent } from '@/data/content';

const targetCountries = ['美国', '英国', '香港', '新加坡', '澳洲', '加拿大', '欧洲其他国家'];
const targetPrograms = ['博士申请', '硕士申请', '奖学金申请', '文书指导', '面试辅导', '期刊发表', '学业辅导'];
const degrees = ['本科在读', '本科毕业', '硕士在读', '硕士毕业', '博士在读'];
const timelines = ['2026 Fall', '2027 Spring', '2027 Fall', '2028 Fall', '暂不确定'];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    degree: '',
    country: '',
    program: '',
    timeline: '',
    background: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {contactContent.headline}
          </h2>
          <p className="text-white/60 text-lg mb-10">{contactContent.subheadline}</p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-sm text-white/40">电话</div>
                <div className="font-medium">{contactContent.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-sm text-white/40">邮箱</div>
                <div className="font-medium">{contactContent.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-sm text-white/40">微信</div>
                <div className="font-medium">{contactContent.wechat}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-sm text-white/40">地址</div>
                <div className="font-medium">{contactContent.address}</div>
              </div>
            </div>
          </div>

          {/* Placeholder image */}
          <div className="placeholder-img h-48 text-xs max-w-md">
            {contactContent.placeholderImage}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">提交成功！</h3>
              <p className="text-gray-500">
                我们将在24小时内与你联系，请保持手机畅通。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  姓名 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="请输入你的姓名"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Contact + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    微信/手机号 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="微信号或手机号"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    邮箱 <span className="text-gray-400 text-xs">(选填)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Degree + Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    当前学历 <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm text-gray-700"
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  >
                    <option value="">请选择</option>
                    {degrees.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    目标国家 <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm text-gray-700"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    <option value="">请选择目标国家</option>
                    {targetCountries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Program + Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    目标项目 <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm text-gray-700"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  >
                    <option value="">请选择目标项目</option>
                    {targetPrograms.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    申请时间 <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm text-gray-700"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="">请选择申请时间</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Background */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  当前背景 <span className="text-gray-400 text-xs">(选填)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="GPA、学校名称、科研经历、论文发表、语言成绩等"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm resize-none"
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  咨询内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="请简要描述你的留学目标、困惑或需求…"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3 text-base">
                提交咨询
                <Send size={18} />
              </button>
              <p className="text-xs text-gray-400 text-center">
                提交即表示你同意我们的隐私政策，我们承诺不会泄露你的个人信息
              </p>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
