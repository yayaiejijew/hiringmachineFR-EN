import { FileText, Workflow, Mail, List, Eye, Rocket } from 'lucide-react';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

export default function Features() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emerald-400">
          {t.features.title}
        </h2>

        <p className="text-xl text-gray-300 text-center mb-16 leading-relaxed max-w-4xl mx-auto">
          {t.features.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="bg-emerald-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">{t.features.forms}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.features.formsDesc}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Workflow className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">{t.features.pipelines}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.features.pipelinesDesc}
            </p>
            <p className="text-emerald-400 italic">
              {t.features.pipelinesNote}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="bg-cyan-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">{t.features.communication}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.features.communicationDesc}
            </p>
            <div className="bg-white/5 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">1.</span>
                <p className="text-gray-300">{t.features.step1}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">2.</span>
                <p className="text-gray-300">{t.features.step2}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 italic">
              {t.features.communicationNote}
            </p>
            <p className="text-gray-300 mt-4">
              {t.features.communicationContinue}
            </p>
            <p className="text-emerald-400 font-medium mt-4">
              {t.features.communicationBenefit}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="bg-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <List className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">{t.features.stages}</h3>
            <p className="text-gray-300 mb-6">{t.features.stagesDesc}</p>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-400 mb-2">{t.features.admission}</h4>
                <p className="text-sm text-gray-400">{t.features.admissionDesc}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-400 mb-2">{t.features.interview1}</h4>
                <p className="text-sm text-gray-400">{t.features.interview1Desc}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-cyan-500">
                <h4 className="font-bold text-cyan-400 mb-2">{t.features.interview2}</h4>
                <p className="text-sm text-gray-400">{t.features.interview2Desc}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-400 mb-2">{t.features.hired}</h4>
                <p className="text-sm text-gray-400">{t.features.hiredDesc}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-400 mb-2">{t.features.notHired}</h4>
                <p className="text-sm text-gray-400">{t.features.notHiredDesc}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-500">
                <h4 className="font-bold text-yellow-400 mb-2">{t.features.keepInTouch}</h4>
                <p className="text-sm text-gray-400">{t.features.keepInTouchDesc}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="bg-pink-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">{t.features.visibility}</h3>
            <div className="space-y-3 text-gray-300">
              <p>{t.features.visibilityDesc}</p>
              <p className="text-emerald-400 font-medium">
                {t.features.visibilityBenefit}
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="bg-orange-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">{t.features.scalability}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.features.scalabilityDesc}
            </p>
            <p className="text-emerald-400 font-medium">
              {t.features.scalabilityBenefit}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
