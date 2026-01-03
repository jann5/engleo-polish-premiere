import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Gamepad2, Target, Repeat, Headphones, PenTool } from 'lucide-react';

const methods = [
  {
    icon: MessageSquare,
    title: 'Komunikacja na pierwszym miejscu',
    description: 'Nauka języka to przede wszystkim umiejętność komunikowania się. Od pierwszej lekcji zachęcam do mówienia — nawet jeśli jeszcze popełniasz błędy. Bo to właśnie przez praktykę osiąga się płynność.',
  },
  {
    icon: Gamepad2,
    title: 'Nauka przez zabawę',
    description: 'Szczególnie w pracy z dziećmi i młodzieżą wykorzystuję gry, quizy i interaktywne ćwiczenia. Kiedy nauka jest przyjemna, wiedza zostaje na dłużej!',
  },
  {
    icon: Target,
    title: 'Cele dostosowane do Ciebie',
    description: 'Nie uczę "po kolei z podręcznika". Najpierw poznaję Twoje cele — czy to matura, praca, podróże — i na tej podstawie tworzę indywidualny program.',
  },
  {
    icon: Repeat,
    title: 'Systematyczne powtórki',
    description: 'Wykorzystuję techniki spaced repetition (powtórek rozłożonych w czasie), dzięki którym nowe słówka i struktury zostają w pamięci na stałe.',
  },
  {
    icon: Headphones,
    title: 'Autentyczne materiały',
    description: 'Filmy, podcasty, artykuły, piosenki — uczysz się języka takiego, jakiego używają native speakerzy. Żadnych sztucznych dialogów!',
  },
  {
    icon: PenTool,
    title: 'Feedback na bieżąco',
    description: 'Po każdej lekcji wiesz, co poszło dobrze, a nad czym warto jeszcze popracować. Regularnie śledzę Twoje postępy i dostosowuję plan.',
  },
];

const process = [
  {
    step: '01',
    title: 'Bezpłatna konsultacja',
    description: 'Poznajemy się, rozmawiamy o Twoich celach i oczekiwaniach. Oceniam Twój aktualny poziom.',
  },
  {
    step: '02',
    title: 'Indywidualny plan',
    description: 'Tworzę program nauczania dopasowany specjalnie do Ciebie — Twoje cele, tempo, preferencje.',
  },
  {
    step: '03',
    title: 'Regularne lekcje',
    description: 'Spotykamy się online lub stacjonarnie. Każda lekcja to mix konwersacji, ćwiczeń i nowych materiałów.',
  },
  {
    step: '04',
    title: 'Śledzenie postępów',
    description: 'Regularnie omawiamy Twoje postępy i dostosowuję plan, żebyś ciągle się rozwijał/a.',
  },
];

export default function JakUcze() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Metodyka
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
              Jak <span className="text-primary">uczę</span>?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Nowoczesne metody, indywidualne podejście i mnóstwo praktyki. 
              Poznaj mój sposób na efektywną i przyjemną naukę angielskiego.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <AnimatedCard
                key={method.title}
                delay={index * 0.1}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <method.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Jak wygląda współpraca?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Od pierwszego kontaktu do płynnego mówienia — krok po kroku.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.15}>
                <div className="relative">
                  <span className="text-7xl font-bold text-primary/10">{item.step}</span>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Online vs Stacjonarnie */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Online czy stacjonarnie?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Wybierz formę, która najlepiej pasuje do Twojego stylu życia.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedCard className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Lekcje online
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Wygoda — uczysz się z dowolnego miejsca
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Oszczędność czasu — bez dojazdów
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Interaktywne materiały na ekranie
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Nagrania lekcji do powtórki
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.15} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Lekcje stacjonarne
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Bezpośredni kontakt z nauczycielem
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Brak rozpraszaczy domowych
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Fizyczne materiały i karty pracy
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  Idealne dla młodszych dzieci
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Gotowy na pierwszą lekcję?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Umów się na bezpłatną konsultację i sprawdź, jak mogę Ci pomóc.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                Zacznij naukę
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
