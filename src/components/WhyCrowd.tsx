import { Users, ClipboardList, Store, Wallet, ShoppingCart, Radio } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const REASONS = [
  {
    icon: Users,
    title: 'Everyone Arrives at the Same Time',
    text: 'Lunch breaks and class schedules overlap, so the entire campus floods the canteen simultaneously.',
  },
  {
    icon: ClipboardList,
    title: 'Manual Ordering Process',
    text: 'Orders are taken and prepared one by one at the counter — no advance preparation is possible.',
  },
  {
    icon: Store,
    title: 'Limited Number of Counters',
    text: 'Few serving counters cannot handle the sudden surge of hundreds of students at once.',
  },
  {
    icon: Wallet,
    title: 'Cash / Payment Takes Time',
    text: 'Handling cash and giving change at the counter significantly slows down each transaction.',
  },
  {
    icon: ShoppingCart,
    title: 'No Pre-Order Facility',
    text: 'Students cannot order in advance, so every order is created only after joining the queue.',
  },
  {
    icon: Radio,
    title: 'No Real-Time Crowd Information',
    text: 'Students have no way to know how busy the canteen is before they walk over and join the line.',
  },
];

export function WhyCrowd() {
  return (
    <section id="why" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid-faint opacity-20" style={{ backgroundSize: '48px 48px' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Root Causes"
          title="Why Does the Crowd Happen?"
          description="Understanding the key reasons behind the canteen congestion is the first step toward solving it."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="group flex h-full gap-5 rounded-2xl border border-white/8 bg-ink-900/60 p-6 transition-all duration-300 hover:border-brand-400/30 hover:bg-ink-800/60">
                <div className="flex flex-col items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/20 text-brand-300 ring-1 ring-brand-400/20 transition-transform group-hover:scale-110">
                    <r.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="mt-3 text-2xl font-bold text-white/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-snug text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
