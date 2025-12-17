import { CreditCard, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

export default function HowItWorks() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
          {t.howItWorks.title}
        </h2>

        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          {t.howItWorks.intro}
        </p>

        <div className="space-y-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-slate-700 p-8">
            <div className="flex items-start gap-6">
              <div className="bg-slate-700 text-white rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{t.howItWorks.step0}</h3>
                  <span className="text-xl font-bold text-emerald-600">{t.howItWorks.prerequisite}</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {t.howItWorks.prerequisiteDesc}
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                  <p className="text-emerald-800 font-bold">{t.howItWorks.prerequisiteTime}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-emerald-600 p-8">
            <div className="flex items-start gap-6">
              <div className="bg-emerald-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{t.howItWorks.step1}</h3>
                  <span className="text-xl font-bold text-emerald-600">{t.howItWorks.setup}</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {t.howItWorks.setupDesc}
                </p>
                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-lg">{t.howItWorks.costs}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200">
                      <div className="bg-blue-100 text-blue-700 rounded-lg px-3 py-1 font-bold text-lg">$29</div>
                      <div>
                        <p className="font-medium text-slate-900">{t.howItWorks.typeform}</p>
                        <p className="text-sm text-slate-600">{t.howItWorks.typeformDesc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200">
                      <div className="bg-cyan-100 text-cyan-700 rounded-lg px-3 py-1 font-bold text-lg">$10</div>
                      <div>
                        <p className="font-medium text-slate-900">{t.howItWorks.clickup}</p>
                        <p className="text-sm text-slate-600">{t.howItWorks.clickupDesc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200">
                      <div className="bg-emerald-100 text-emerald-700 rounded-lg px-3 py-1 font-bold text-lg whitespace-nowrap">$9 / $0</div>
                      <div>
                        <p className="font-medium text-slate-900">{t.howItWorks.make}</p>
                        <p className="text-sm text-slate-600">{t.howItWorks.makeDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {t.howItWorks.setupContinue}
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                  <p className="text-emerald-800 font-bold">{t.howItWorks.setupTime}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-blue-600 p-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{t.howItWorks.step2}</h3>
                  <span className="text-xl font-bold text-blue-600">{t.howItWorks.questions}</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {t.howItWorks.questionsDesc}
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-slate-900 mb-4">{t.howItWorks.basicInfo}</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {['CV', 'Experience (Yes/No)', 'Phone Number', 'Email Address', 'Full Name'].map((item) => {
                      const translatedItem = language === 'fr'
                        ? { 'Experience (Yes/No)': 'Expérience (Oui/Non)', 'Phone Number': 'Numéro de téléphone', 'Email Address': 'Adresse email', 'Full Name': 'Nom complet' }[item] || item
                        : item;
                      return (
                        <div key={item} className="flex items-center gap-2 bg-white rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-slate-700">{translatedItem}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                    <p className="font-bold text-slate-900 mb-2">{t.howItWorks.question1}</p>
                    <p className="text-slate-700">{t.howItWorks.question1Text}</p>
                  </div>
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                    <p className="font-bold text-slate-900 mb-2">{t.howItWorks.question2}</p>
                    <p className="text-slate-700">{t.howItWorks.question2Text}</p>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                  <p className="text-emerald-800 font-bold">{t.howItWorks.questionsTime}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-cyan-600 p-8">
            <div className="flex items-start gap-6">
              <div className="bg-cyan-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{t.howItWorks.step3}</h3>
                  <span className="text-xl font-bold text-cyan-600">{t.howItWorks.hangUp}</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                  {t.howItWorks.setup2days}
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {t.howItWorks.postForms}
                </p>
                <p className="text-emerald-600 font-bold text-lg mb-6">
                  {t.howItWorks.process}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              {t.howItWorks.promise}
            </h3>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">
                    {t.howItWorks.guarantee1}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">
                    {t.howItWorks.guarantee2}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">
                    {t.howItWorks.guarantee3}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">
                    {t.howItWorks.guarantee4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
