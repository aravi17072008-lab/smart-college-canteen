import { Users, Timer, Clock, AlertTriangle, Frown } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const PROBLEMS = [
  {
    icon: Users,
    title: 'Heavy Crowd',
    text: 'During lunch and break time, the canteen becomes extremely crowded with students arriving all at once.',
  },
  {
    icon: Timer,
    title: 'Long Queues',
    text: 'Food counters develop long, slow-moving queues that stretch across the canteen area.',
  },
  {
    icon: Clock,
    title: 'Wasted Break Time',
    text: "Precious break time that should be for rest and eating is wasted standing and waiting.",
  },
  {
    icon: AlertTriangle,
    title: 'Staff Overload',
    text: 'Canteen staff face extreme pressure during peak hours, leading to slower service and errors.',
  },
  {
    icon: Frown,
    title: 'Poor Experience',
    text: 'The overall canteen experience becomes stressful and frustrating for both students and staff.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid-faint opacity-20" style={{ backgroundSize: '48px 48px' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Problem"
          title="The Canteen Chaos"
          description="Every day, the college canteen struggles with predictable but unmanaged peak-hour pressure that affects everyone."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/8 bg-ink-900/60 p-6 transition-all duration-300 hover:border-brand-400/30 hover:bg-ink-800/60 hover:shadow-glow">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-500/20">
                    <p.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}

          {/* Summary callout */}
          <Reveal delay={PROBLEMS.length * 80}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/10 to-accent-500/5 p-6">
              <p className="text-2xl font-bold text-white">The result?</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                A daily struggle where students lose their break and staff can't keep up — a problem
                that grows with campus size.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
