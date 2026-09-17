import { UtensilsCrossed } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950">
            <UtensilsCrossed className="h-4.5 w-4.5" strokeWidth={2.5} />
          </span>
          <span className="text-sm font-medium text-slate-300">Smart College Canteen</span>
        </div>
        <p className="text-xs text-slate-500">
          Ravi A · Mechatronics Engineering · 25112020 · College Project Presentation
        </p>
      </div>
    </footer>
  );
}
