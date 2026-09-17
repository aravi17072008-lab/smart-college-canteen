import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center = true }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulseRing" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
