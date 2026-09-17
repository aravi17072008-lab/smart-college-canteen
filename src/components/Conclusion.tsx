import { ShoppingCart, Ticket, Activity, BrainCircuit, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const PILLARS = [
  { icon: ShoppingCart, label: 'Pre-Ordering' },
  { icon: Ticket, label: 'Digital Tokens' },
  { icon: Activity, label: 'Real-Time Crowd Monitoring' },
];

export function Conclusion() {
  return (
    <section id="conclusion" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid-faint opacity-20" style={{ backgroundSize: '48px 48px' }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Conclusion"
          title="Bringing It All Together"
          description="A smart, AI-enabled canteen is not a far-off idea — it is achievable with today's technology."
        />

        <Reveal delay={120}>
          <div className="mt-12 rounded-3xl border border-white/10 bg-ink-900/60 p-8 shadow-card sm:p-10">
            {/* Three pillars row */}
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
              {PILLARS.map((p, i) => (
                <div key={p.label} className="flex items-center gap-3 sm:flex-col sm:text-center">
                  <div className="flex items-center gap-3 rounded-xl border border-brand-400/20 bg-brand-500/10 px-4 py-3">
                    <p.icon className="h-6 w-6 text-brand-300" strokeWidth={2} />
                    <span className="text-sm font-semibold text-white">{p.label}</span>
                  </div>
                  {i < PILLARS.length - 1 && (
                    <span className="hidden text-brand-400/40 sm:block">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-base leading-relaxed text-slate-300 sm:text-lg text-balance">
              Combining <span className="font-semibold text-brand-300">pre-ordering</span>,{' '}
              <span className="font-semibold text-brand-300">digital tokens</span>, and{' '}
              <span className="font-semibold text-brand-300">real-time crowd monitoring</span> can
              significantly reduce unnecessary waiting and crowding in the college canteen.
            </p>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex items-start gap-4 rounded-2xl border border-accent-400/20 bg-accent-500/5 p-5">
              <BrainCircuit className="h-8 w-8 shrink-0 text-accent-400" strokeWidth={1.8} />
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                <span className="font-semibold text-accent-400">AI</span> can further improve
                efficiency by predicting demand, estimating waiting time, and helping students
                choose better pickup times — making the canteen smarter, faster, and more
                student-friendly.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
