import {
  Ticket,
  ShoppingCart,
  Split,
  Zap,
  QrCode,
  CalendarClock,
  Soup,
  Activity,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const SOLUTIONS = [
  {
    icon: Ticket,
    title: 'Token System',
    text: 'Issue numbered tokens so students wait comfortably instead of standing in a physical line.',
  },
  {
    icon: ShoppingCart,
    title: 'Pre-Order System',
    text: 'Allow students to order food in advance through an app so it is ready for quick pickup.',
  },
  {
    icon: Split,
    title: 'Separate Counters',
    text: 'Dedicate counters for different food types to distribute the crowd across service points.',
  },
  {
    icon: Zap,
    title: 'Fast Pickup Counter',
    text: 'A counter exclusively for pre-ordered meals, enabling instant grab-and-go collection.',
  },
  {
    icon: QrCode,
    title: 'QR Menu & Digital Payment',
    text: 'Scan to browse the menu and pay online — eliminates cash handling and speeds up ordering.',
  },
  {
    icon: CalendarClock,
    title: 'Class-wise Time Slots',
    text: 'Stagger lunch breaks by class or year so not everyone arrives at the canteen at the same time.',
  },
  {
    icon: Soup,
    title: 'Self-Service Stations',
    text: 'Pre-plated or self-serve stations for common items reduce dependence on staff at the counter.',
  },
  {
    icon: Activity,
    title: 'Live Crowd Monitoring',
    text: 'Real-time display of current crowd levels so students can plan their canteen visit smartly.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ideas & Approaches"
          title="Possible Solutions"
          description="Eight practical approaches that can help reduce crowd and waiting time in the college canteen."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-900/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/30 hover:shadow-glow">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20 transition-all group-hover:bg-brand-500/20 group-hover:ring-brand-400/40">
                  <s.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
