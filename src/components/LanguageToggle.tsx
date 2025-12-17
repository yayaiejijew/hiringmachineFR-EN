import { useContext } from 'react';
import { LanguageContext } from '../App';

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-3 bg-white shadow-lg rounded-full border border-gray-200 p-1">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            language === 'fr'
              ? 'bg-emerald-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            language === 'en'
              ? 'bg-emerald-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
