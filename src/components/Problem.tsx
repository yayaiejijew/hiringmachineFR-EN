import { AlertCircle, TrendingDown, Users } from 'lucide-react';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

export default function Problem() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-900">
          {t.problem.title}
        </h2>

        <p className="text-xl text-center mb-12 text-slate-600 font-medium">
          {t.problem.stats}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-red-500">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-5xl font-bold text-red-600 text-center mb-4">{t.problem.stat1.percent}</div>
            <p className="text-slate-700 text-center leading-relaxed">
              {t.problem.stat1.text}
            </p>
            <p className="text-sm text-slate-500 text-center mt-4">{t.problem.stat1.source}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingDown className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-5xl font-bold text-orange-600 text-center mb-4">{t.problem.stat2.percent}</div>
            <p className="text-slate-700 text-center leading-relaxed">
              {t.problem.stat2.text}
            </p>
            <p className="text-sm text-slate-500 text-center mt-4">{t.problem.stat2.source}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-red-600">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-5xl font-bold text-red-600 text-center mb-4">{t.problem.stat3.percent}</div>
            <p className="text-slate-700 text-center leading-relaxed">
              {t.problem.stat3.text}
            </p>
            <p className="text-sm text-slate-500 text-center mt-4">{t.problem.stat3.source}</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-emerald-400">
            {t.problem.meaning}
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg">{t.problem.impact1}</p>
            </div>
            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg">{t.problem.impact2}</p>
            </div>
            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg">{t.problem.impact3}</p>
            </div>
          </div>

          <p className="text-xl text-center italic text-gray-300">
            {t.problem.circle}
          </p>
        </div>
      </div>
    </section>
  );
}
