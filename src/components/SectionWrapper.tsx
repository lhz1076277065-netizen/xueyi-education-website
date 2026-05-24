import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({ id, children, className, dark }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-28 px-4 md:px-8',
        dark ? 'bg-navy-900 text-white' : 'bg-white',
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
