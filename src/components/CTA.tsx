import { Mail, Calendar, Video } from 'lucide-react';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

export default function CTA() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t.cta.title}
          </h2>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center leading-tight">
            {t.cta.ctaTitle}
          </h3>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-8 h-8 text-emerald-300 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xl font-bold mb-2">{t.cta.option1}</p>
                <p className="text-lg leading-relaxed">
                  {t.cta.option1Text}
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 my-6"></div>

            <div className="flex items-start gap-4">
              <div className="flex gap-2 flex-shrink-0">
                <Calendar className="w-8 h-8 text-blue-300 mt-1" />
                <Video className="w-8 h-8 text-cyan-300 mt-1" />
              </div>
              <div>
                <p className="text-xl font-bold mb-2">{t.cta.option2}</p>
                <p className="text-lg leading-relaxed">
                  {t.cta.option2Text}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-white/30">
              <p className="text-emerald-300 font-bold text-xl mb-2">
                {t.cta.trial}
              </p>
              <p className="text-white/90 text-lg">
                {t.cta.looking}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-8 py-6">
            <p className="text-emerald-400 text-lg font-medium mb-2">
              {t.cta.riskFree}
            </p>
            <p className="text-gray-300 text-lg max-w-2xl">
              {t.cta.riskFreeDesc}
            </p>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-400 space-y-2">
          <p><span className="font-bold text-white">{t.cta.company}</span></p>
          <p><span className="font-bold text-white">SAYCE</span> {t.cta.services}</p>
          <p>{t.cta.rights}</p>
          <p>{t.cta.legal}</p>
        </div>
      </div>
    </section>
  );
}
