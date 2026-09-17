import { useState } from 'react';
import {
  ShoppingCart,
  Ticket,
  Activity,
  UtensilsCrossed,
  CheckCircle2,
  ArrowRight,
  Utensils,
  Smartphone,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const PILLARS = [
  {
    icon: ShoppingCart,
    title: 'Pre-Order',
    text: 'Students place orders in advance through the app — food is prepared before they arrive.',
    color: 'from-brand-400 to-brand-600',
  },
  {
    icon: Ticket,
    title: 'Digital Token',
    text: 'Each order generates a unique digital token for organized, queue-free pickup.',
    color: 'from-accent-400 to-accent-600',
  },
  {
    icon: Activity,
    title: 'Live Crowd Monitoring',
    text: 'Real-time crowd display helps students choose the best time to visit the canteen.',
    color: 'from-brand-400 to-accent-500',
  },
];

const STEPS = [
  {
    icon: Utensils,
    title: 'Select Meal',
    text: 'Browse the digital menu and choose your meal from your phone.',
  },
  {
    icon: Smartphone,
    title: 'Place Pre-Order',
    text: 'Confirm your order and pay online — no cash, no counter waiting.',
  },
  {
    icon: Ticket,
    title: 'Receive Token',
    text: 'Get a digital token number with an estimated pickup time.',
  },
  {
    icon: Activity,
    title: 'Live Queue',
    text: 'Track real-time queue status and know exactly when to head to the canteen.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Pickup Food',
    text: 'Show your token at the fast-pickup counter and grab your meal instantly.',
  },
];

export function SmartSystem() {
  const [active, setActive] = useState(0);

  return (
    <section id="system" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="absolute inset-0 bg-grid-faint opacity-20" style={{ backgroundSize: '48px 48px' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Proposal"
          title="Our Proposed Smart Canteen System"
          description="A system built on three core ideas that work together to eliminate waiting and crowding."
        />

        {/* Three pillars */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-7 text-center transition-all duration-300 hover:shadow-glow">
                <div className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-ink-950 shadow-glow`}>
                  <p.icon className="h-8 w-8" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive flow */}
        <Reveal delay={200}>
          <div className="mt-16 rounded-3xl border border-white/8 bg-ink-900/50 p-6 sm:p-10">
            <h3 className="text-center text-2xl font-bold text-white sm:text-3xl">
              How It Works — Step by Step
            </h3>
            <p className="mt-2 text-center text-sm text-slate-400">
              Click a step to see the details of each stage
            </p>

            {/* Step indicators */}
            <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {STEPS.map((step, i) => (
                <div key={step.title} className="flex items-center gap-4 lg:flex-1 lg:flex-col">
                  <button
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 lg:flex-col lg:text-center ${
                      active === i
                        ? 'border-brand-400/40 bg-brand-500/10 shadow-glow'
                        : 'border-white/8 bg-ink-800/40 hover:border-white/15'
                    }`}
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all lg:mx-auto ${
                        active === i
                          ? 'bg-brand-400 text-ink-950'
                          : 'bg-white/5 text-slate-400 group-hover:text-brand-300'
                      }`}
                    >
                      <step.icon className="h-5.5 w-5.5" strokeWidth={2} />
                    </span>
                    <div className="lg:mt-2">
                      <p className="text-xs font-medium text-brand-300">Step {i + 1}</p>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                    </div>
                  </button>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-brand-400/40 lg:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Active step detail */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/10 to-accent-500/5 p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-400 text-ink-950 shadow-glow">
                  {(() => {
                    const Icon = STEPS[active].icon;
                    return <Icon className="h-7 w-7" strokeWidth={2.2} />;
                  })()}
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
                    Step {active + 1} of {STEPS.length}
                  </p>
                  <h4 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    {STEPS[active].title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {STEPS[active].text}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? 'w-10 bg-brand-400' : 'w-4 bg-white/15 hover:bg-white/25'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Outcome banner */}
        <Reveal delay={100}>
          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-accent-400/20 bg-accent-500/5 p-5 text-center">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-400" />
            <p className="text-sm font-medium text-slate-200 sm:text-base">
              Result: A smooth, predictable, and stress-free canteen experience for everyone.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
