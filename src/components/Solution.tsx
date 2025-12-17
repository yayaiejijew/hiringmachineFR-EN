import { CheckCircle2, Zap, Database, TrendingUp } from 'lucide-react';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

export default function Solution() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900">
          {t.solution.title}
        </h2>

        <p className="text-xl text-slate-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
          {t.solution.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{t.solution.benefit1}</h3>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <CheckCircle2 className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{t.solution.benefit2}</h3>
            <p className="text-slate-600">{t.solution.benefit2Sub}</p>
          </div>

          <div className="text-center">
            <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Database className="w-10 h-10 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{t.solution.benefit3}</h3>
            <p className="text-slate-600">{t.solution.benefit3Sub}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-10 border-2 border-emerald-200 mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="w-10 h-10 text-emerald-600" />
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {t.solution.systemTitle}
            </h3>
          </div>
          <p className="text-xl text-center text-slate-700 leading-relaxed">
            {t.solution.systemDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
