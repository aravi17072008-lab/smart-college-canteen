import {
  TrendingUp,
  Timer,
  Gauge,
  Lightbulb,
  Boxes,
  BrainCircuit,
  ArrowRight,
  Database,
  Cpu,
  BarChart3,
  Clock4,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const AI_ROLES = [
  {
    icon: TrendingUp,
    title: 'Predict Peak Periods',
    text: 'AI analyzes historical patterns to forecast exactly when the canteen will be busiest.',
  },
  {
    icon: Timer,
    title: 'Estimate Waiting Time',
    text: 'Real-time queue length and order volume are used to predict how long a student will wait.',
  },
  {
    icon: Gauge,
    title: 'Display Crowd Level',
    text: 'A live dashboard shows current crowd density so students can decide when to visit.',
  },
  {
    icon: Lightbulb,
    title: 'Suggest Better Times',
    text: 'AI recommends less-crowded pickup windows tailored to each student\u2019s schedule.',
  },
  {
    icon: Boxes,
    title: 'Demand Forecasting',
    text: 'Predicts which items will be ordered most, helping staff prepare the right quantity in advance.',
  },
];

const WORKFLOW = [
  { icon: Database, label: 'Historical Data', text: 'Past crowd, order & timing data' },
  { icon: Cpu, label: 'AI Prediction', text: 'Machine learning models process the data' },
  { icon: BarChart3, label: 'Crowd / Demand Analysis', text: 'Patterns and forecasts are generated' },
  { icon: Clock4, label: 'Better Pickup Time', text: 'Students get smart time suggestions' },
  { icon: CheckCircle2, label: 'Efficient Canteen', text: 'Smoother flow, less waiting' },
];

export function RoleOfAI() {
  return (
    <section id="ai" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid-faint opacity-20" style={{ backgroundSize: '48px 48px' }} />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Intelligence Layer"
          title="The Role of AI"
          description="Artificial Intelligence turns raw canteen data into smart, actionable decisions that benefit both students and staff."
        />

        {/* AI roles grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-white/8 bg-ink-900/60 p-6 transition-all duration-300 hover:border-brand-400/30 hover:bg-ink-800/60 hover:shadow-glow">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20 transition-all group-hover:bg-brand-500/20">
                    <r.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-white">{r.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{r.text}</p>
              </div>
            </Reveal>
          ))}

          {/* AI badge card */}
          <Reveal delay={AI_ROLES.length * 70}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-400/25 bg-gradient-to-br from-brand-500/15 to-accent-500/10 p-6 text-center">
              <BrainCircuit className="h-12 w-12 text-brand-300" strokeWidth={1.8} />
              <p className="mt-4 text-sm font-medium text-slate-200">
                AI transforms the canteen from <span className="text-brand-300">reactive</span> to{' '}
                <span className="text-accent-400">proactive</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* AI Workflow */}
        <Reveal delay={150}>
          <div className="mt-16 rounded-3xl border border-white/8 bg-ink-900/50 p-6 sm:p-10">
            <h3 className="text-center text-2xl font-bold text-white sm:text-3xl">AI Workflow</h3>
            <p className="mt-2 text-center text-sm text-slate-400">
              From raw data to a smarter canteen — the complete pipeline
            </p>

            {/* Horizontal flow on desktop, vertical on mobile */}
            <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {WORKFLOW.map((node, i) => (
                <div key={node.label} className="flex items-center gap-4 lg:flex-1 lg:flex-col">
                  <div className="flex w-full items-center gap-4 rounded-xl border border-white/10 bg-ink-800/50 p-4 transition-colors hover:border-brand-400/30 lg:flex-col lg:text-center">
                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/15 text-brand-300 ring-1 ring-brand-400/20">
                      {i === 0 && (
                        <span className="absolute inset-0 rounded-xl bg-brand-400/20 animate-pulseRing" />
                      )}
                      <node.icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="lg:mt-2">
                      <p className="text-xs font-medium text-brand-300">Stage {i + 1}</p>
                      <p className="text-sm font-semibold text-white">{node.label}</p>
                      <p className="mt-0.5 hidden text-xs text-slate-400 lg:block">{node.text}</p>
                    </div>
                  </div>
                  {i < WORKFLOW.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-brand-400/40 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
