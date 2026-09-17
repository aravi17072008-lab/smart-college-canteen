import {
  XCircle,
  CheckCircle2,
  Users,
  Timer,
  Soup,
  Frown,
  AlertTriangle,
  FlaskConical,
  Zap,
  TrendingUp,
  Smile,
  ShieldCheck,
  ChefHat,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const BEFORE = [
  { icon: Users, text: 'Long queues at every counter' },
  { icon: AlertTriangle, text: 'Counter congestion and crowding' },
  { icon: Soup, text: 'Slow and unorganized food collection' },
  { icon: Frown, text: 'Stressful student experience' },
  { icon: TrendingUp, text: 'Unpredictable staff workload' },
  { icon: FlaskConical, text: 'Reactive food preparation' },
];

const AFTER = [
  { icon: Timer, text: 'Reduced waiting time' },
  { icon: Users, text: 'Less counter congestion' },
  { icon: Zap, text: 'Faster food collection' },
  { icon: Smile, text: 'Better student time management' },
  { icon: ShieldCheck, text: 'Reduced staff stress' },
  { icon: ChefHat, text: 'Better food preparation planning' },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Transformation"
          title="Expected Impact"
          description="A clear comparison of the canteen experience before and after implementing the Smart Canteen System."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <Reveal>
            <div className="h-full rounded-3xl border border-red-500/20 bg-red-500/5 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-500/15 text-red-400">
                  <XCircle className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-red-400/80">
                    Current State
                  </p>
                  <h3 className="text-2xl font-bold text-white">Before</h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {BEFORE.map((item, i) => (
                  <Reveal as="li" key={item.text} delay={i * 60}>
                    <div className="flex items-center gap-3 rounded-xl border border-red-500/10 bg-red-500/5 p-3.5">
                      <item.icon className="h-5 w-5 shrink-0 text-red-400/80" strokeWidth={2} />
                      <span className="text-sm text-slate-300">{item.text}</span>
                      <XCircle className="ml-auto h-4 w-4 shrink-0 text-red-400/50" />
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* After */}
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-accent-400/25 bg-accent-500/5 p-7 sm:p-8 shadow-glow-green">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-400/80">
                    With Smart Canteen
                  </p>
                  <h3 className="text-2xl font-bold text-white">After</h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {AFTER.map((item, i) => (
                  <Reveal as="li" key={item.text} delay={i * 60}>
                    <div className="flex items-center gap-3 rounded-xl border border-accent-400/15 bg-accent-500/5 p-3.5 transition-colors hover:border-accent-400/30 hover:bg-accent-500/10">
                      <item.icon className="h-5 w-5 shrink-0 text-accent-400" strokeWidth={2} />
                      <span className="text-sm text-slate-200">{item.text}</span>
                      <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-accent-400/70" />
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Arrow connector on large screens */}
        <Reveal delay={200}>
          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-white/8 bg-ink-900/50 p-5 text-center">
            <TrendingUp className="h-5 w-5 text-brand-300" />
            <p className="text-sm font-medium text-slate-200 sm:text-base">
              The shift from chaos to efficiency is the core value of the Smart Canteen System.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
