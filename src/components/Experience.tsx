import { Clock, Armchair, CreditCard, Users2, Hourglass } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const EXPERIENCES = [
  {
    icon: Clock,
    title: 'Long Waiting Time',
    text: 'Students spend most of their break standing in line instead of eating or relaxing.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Armchair,
    title: 'No Place to Sit',
    text: 'All seats are occupied during peak hours, leaving many students to eat standing.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    icon: CreditCard,
    title: 'Slow Ordering & Payment',
    text: 'Manual order-taking and cash handling at the counter slows down the entire line.',
    color: 'text-brand-300',
    bg: 'bg-brand-500/10',
  },
  {
    icon: Users2,
    title: 'Crowded Counters',
    text: 'Multiple students cluster around counters, creating confusion and longer service time.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: Hourglass,
    title: 'Limited Break Time',
    text: 'A short break is barely enough — waiting in a queue leaves almost no time to eat.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Perspective"
          title="What Students Experience"
          description="A look at the everyday frustrations students face inside the canteen during peak hours."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-card">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/5 blur-2xl transition-opacity group-hover:opacity-60" />
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${e.bg} ${e.color}`}>
                  <e.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{e.text}</p>
              </div>
            </Reveal>
          ))}

          {/* Filler visual card */}
          <Reveal delay={EXPERIENCES.length * 80}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-brand-400/25 bg-brand-500/5 p-7 text-center">
              <p className="text-4xl font-bold text-brand-300">5+</p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                daily pain points every student deals with
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
