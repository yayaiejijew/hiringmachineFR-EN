import { Star } from 'lucide-react';
import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-8">
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-full px-5 py-2 mb-8">
            <p className="text-emerald-400 font-medium text-sm">
              {t.hero.badge}
            </p>
          </div>
          <p className="text-emerald-400 font-medium mb-6 text-lg italic">
            {t.hero.lookingFor}
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-4xl mx-auto text-center">
          {language === 'fr' ? (
            <>
              <span className="text-emerald-400">GÉRANTS D'HÔTELS:</span> {t.hero.title}
            </>
          ) : (
            <>
              <span className="text-emerald-400">BUSINESS OWNERS:</span> {t.hero.title}
            </>
          )}
        </h1>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10 max-w-3xl mx-auto">
          <div className="flex gap-1 mb-4 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-center italic">
            "{t.hero.testimonial}"
          </blockquote>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-emerald-500 rounded-2xl p-8 mb-10">
          <p className="text-xl md:text-2xl font-bold text-center leading-relaxed">
            {t.hero.guarantee}
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
      </div>
    </section>
  );
}
