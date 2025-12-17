import { useState, createContext } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import LanguageToggle from './components/LanguageToggle';

export const LanguageContext = createContext<{ language: 'fr' | 'en'; setLanguage: (lang: 'fr' | 'en') => void }>({
  language: 'fr',
  setLanguage: () => {},
});

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-white">
        <LanguageToggle />
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <CTA />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
