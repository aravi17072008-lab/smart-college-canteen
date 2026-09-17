import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Experience } from '@/components/Experience';
import { WhyCrowd } from '@/components/WhyCrowd';
import { Solutions } from '@/components/Solutions';
import { SmartSystem } from '@/components/SmartSystem';
import { RoleOfAI } from '@/components/RoleOfAI';
import { Impact } from '@/components/Impact';
import { Conclusion } from '@/components/Conclusion';
import { ThankYou } from '@/components/ThankYou';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Experience />
        <WhyCrowd />
        <Solutions />
        <SmartSystem />
        <RoleOfAI />
        <Impact />
        <Conclusion />
        <ThankYou />
      </main>
      <Footer />
    </div>
  );
}

export default App;
