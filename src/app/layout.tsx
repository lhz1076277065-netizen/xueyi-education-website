import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '雪姨留学｜全球硕博申请与奖学金规划',
  description:
    '雪姨留学专注全球硕士、博士、奖学金申请服务，提供选校定位、导师套磁、研究计划、文书修改、面试辅导与全流程申请规划。2000+成功案例，95%奖学金获得率。',
  keywords:
    '博士申请,全奖博士,奖学金申请,留学咨询,研究型硕士申请,PhD申请,套磁,研究计划,留学文书,博士留学,硕士留学,本科留学,期刊发表,学业辅导',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
