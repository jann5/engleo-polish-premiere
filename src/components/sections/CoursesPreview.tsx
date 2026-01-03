import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    emoji: '👧',
    title: 'Dla Dzieci',
    age: '6-12 lat',
    description: 'Nauka przez zabawę — gry, piosenki i interaktywne zajęcia, które rozbudzą miłość do języka.',
    features: ['Kolorowe materiały', 'Gry i zabawy', 'Nagrody za postępy'],
  },
  {
    emoji: '🧑‍🎓',
    title: 'Dla Młodzieży',
    age: '13-18 lat',
    description: 'Przygotowanie do egzaminów i rozwijanie umiejętności komunikacyjnych na każdym poziomie.',
    features: ['Przygotowanie do matury', 'Konwersacje', 'Gramatyka w kontekście'],
  },
  {
    emoji: '👩‍💼',
    title: 'Dla Dorosłych',
    age: '18+ lat',
    description: 'Angielski biznesowy, konwersacyjny lub ogólny — dopasowany do Twoich potrzeb zawodowych i osobistych.',
    features: ['Business English', 'Elastyczne godziny', 'Materiały dopasowane'],
  },
];

export function CoursesPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Oferta
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-foreground">
            Kursy dla każdego
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Niezależnie od wieku i poziomu — znajdziesz kurs idealnie dopasowany do Twoich potrzeb.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <AnimatedCard
              key={course.title}
              delay={index * 0.15}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-border/50"
            >
              <div className="text-5xl mb-6">{course.emoji}</div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {course.age}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {course.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>
              <ul className="space-y-2 mb-8">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link to="/kursy">
                  Dowiedz się więcej
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/kursy">
              Zobacz wszystkie kursy
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
