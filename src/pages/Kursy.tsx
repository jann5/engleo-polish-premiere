import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Users, Video } from 'lucide-react';

const courses = [
  {
    emoji: '👧',
    title: 'Angielski dla Dzieci',
    subtitle: '6-12 lat',
    description: 'Nauka przez zabawę to klucz do sukcesu! Moje zajęcia dla dzieci są pełne gier, piosenek, kolorowych materiałów i interaktywnych ćwiczeń, które rozbudzają naturalną ciekawość i miłość do języka.',
    features: [
      'Gry i zabawy edukacyjne',
      'Piosenki i rymowanki',
      'Kolorowe karty obrazkowe',
      'Nagrody za postępy',
      'Krótkie, dynamiczne lekcje',
      'Budowanie pewności siebie',
    ],
    format: '45 minut',
    type: 'Indywidualnie lub w małych grupach',
    mode: 'Online lub stacjonarnie',
  },
  {
    emoji: '🧑‍🎓',
    title: 'Angielski dla Młodzieży',
    subtitle: '13-18 lat',
    description: 'Czy to przygotowanie do matury, egzaminów Cambridge, czy po prostu chęć swobodnego komunikowania się — moje lekcje pomagają młodzieży osiągnąć konkretne cele językowe.',
    features: [
      'Przygotowanie do matury',
      'Egzaminy Cambridge (FCE, CAE)',
      'Konwersacje na ciekawe tematy',
      'Gramatyka w praktycznym kontekście',
      'Rozwijanie słownictwa',
      'Praca nad wymową',
    ],
    format: '60 minut',
    type: 'Indywidualnie',
    mode: 'Online lub stacjonarnie',
  },
  {
    emoji: '👩‍💼',
    title: 'Angielski dla Dorosłych',
    subtitle: '18+ lat',
    description: 'Niezależnie czy potrzebujesz angielskiego do pracy, podróży czy rozwoju osobistego — dostosuję program do Twoich indywidualnych potrzeb i celów.',
    features: [
      'Business English',
      'Angielski konwersacyjny',
      'Przygotowanie do rozmów rekrutacyjnych',
      'Prezentacje biznesowe',
      'Email i korespondencja',
      'Elastyczne godziny zajęć',
    ],
    format: '60-90 minut',
    type: 'Indywidualnie',
    mode: 'Online lub stacjonarnie',
  },
];

export default function Kursy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Oferta kursów
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
              Kursy dopasowane do <span className="text-primary">Twoich potrzeb</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Każdy uczeń jest inny — dlatego tworzę indywidualny program nauczania, 
              który odpowiada Twoim celom i stylowi uczenia się.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <AnimatedSection key={course.title} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="text-6xl mb-4">{course.emoji}</div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {course.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                      {course.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {course.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Clock size={18} className="text-primary" />
                        {course.format}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Users size={18} className="text-primary" />
                        {course.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Video size={18} className="text-primary" />
                        {course.mode}
                      </div>
                    </div>

                    <Button size="lg" asChild>
                      <Link to="/kontakt">
                        Zapisz się na kurs
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </div>

                  {/* Features Card */}
                  <AnimatedCard 
                    delay={index * 0.1 + 0.2}
                    className={`bg-card rounded-2xl p-8 shadow-lg border border-border/50 ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Co obejmuje kurs:
                    </h3>
                    <ul className="space-y-4">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nie wiesz, który kurs wybrać?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Umów się na bezpłatną konsultację — razem znajdziemy najlepsze rozwiązanie dla Ciebie.
            </p>
            <Button size="lg" asChild>
              <Link to="/kontakt">
                Umów bezpłatną konsultację
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
