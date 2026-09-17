import { UtensilsCrossed, GraduationCap, User, Hash, ArrowUp } from 'lucide-react';
import { Reveal } from './Reveal';

export function ThankYou() {
  return (
    <section
      id="thankyou"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-radial-glow" />
      <div
        className="absolute inset-0 bg-grid-faint opacity-30"
        style={{ backgroundSize: '48px 48px' }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-glow animate-floatY">
            <UtensilsCrossed className="h-10 w-10" strokeWidth={2.2} />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Thank <span className="shimmer-text">You</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 text-lg font-medium text-slate-300 sm:text-xl">
            Smart College Canteen — Reducing Crowd &amp; Waiting Time
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-10 max-w-md glass rounded-2xl p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-400">Presented by</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-center gap-3">
                <User className="h-4.5 w-4.5 text-brand-300" />
                <p className="text-lg font-semibold text-white">Ravi A</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <GraduationCap className="h-4.5 w-4.5 text-accent-400" />
                <p className="text-base text-slate-200">Mechatronics Engineering</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Hash className="h-4.5 w-4.5 text-brand-300" />
                <p className="text-base text-slate-200">25112020</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-300"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </button>
        </Reveal>
      </div>
    </section>
  );
}
