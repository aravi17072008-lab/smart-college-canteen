import { UtensilsCrossed, Sparkles, ChevronDown, GraduationCap, Hash, User } from 'lucide-react';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div
        className="absolute inset-0 bg-grid-faint opacity-40"
        style={{ backgroundSize: '48px 48px' }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[300px] w-[300px] rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-300">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Campus Initiative
          </div>
        </Reveal>

        {/* Logo mark */}
        <Reveal delay={80}>
          <div className="mt-8 inline-grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-glow animate-floatY">
            <UtensilsCrossed className="h-10 w-10" strokeWidth={2.2} />
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={140}>
          <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl text-balance">
            Smart College <span className="shimmer-text">Canteen</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-4 text-xl font-medium text-slate-300 sm:text-2xl md:text-3xl">
            Reducing Crowd &amp; Waiting Time
          </p>
        </Reveal>

        {/* Student details card */}
        <Reveal delay={280}>
          <div className="mx-auto mt-10 max-w-md glass rounded-2xl p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-400">Presented by</p>
            <div className="mt-4 space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                  <User className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Ravi A</p>
                  <p className="text-xs text-slate-400">Student Name</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-500/15 text-accent-400">
                  <GraduationCap className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Mechatronics Engineering</p>
                  <p className="text-xs text-slate-400">Department</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                  <Hash className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">25112020</p>
                  <p className="text-xs text-slate-400">Register No.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Scroll cue */}
        <Reveal delay={360}>
          <button
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 inline-flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-brand-300"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
