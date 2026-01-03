import { AnimatedSection, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Heart, Target, Sparkles, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Pasja do nauczania',
    description: 'Każda lekcja jest przygotowana z sercem i zaangażowaniem. Twój sukces jest moim priorytetem.',
  },
  {
    icon: Target,
    title: 'Indywidualne podejście',
    description: 'Program nauczania dostosowany do Twoich celów, poziomu i stylu uczenia się.',
  },
  {
    icon: Sparkles,
    title: 'Nowoczesne metody',
    description: 'Wykorzystuję sprawdzone techniki i interaktywne materiały, które czynią naukę efektywną i przyjemną.',
  },
  {
    icon: Clock,
    title: 'Elastyczny grafik',
    description: 'Lekcje dopasowane do Twojego harmonogramu — online lub stacjonarnie.',
  },
];

export function WhyEngleo() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Dlaczego warto
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-foreground">
            Dlaczego Engleo?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Odkryj, co wyróżnia moje lekcje i dlaczego uczniowie osiągają swoje cele językowe.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedCard
              key={reason.title}
              delay={index * 0.1}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
