import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Heart, Award, BookOpen } from 'lucide-react';

const milestones = [
  {
    icon: GraduationCap,
    title: 'Wykształcenie',
    description: 'Ukończone studia filologiczne ze specjalizacją w języku angielskim.',
  },
  {
    icon: Award,
    title: 'Certyfikaty',
    description: 'Certyfikowany nauczyciel z uprawnieniami do nauczania na wszystkich poziomach.',
  },
  {
    icon: BookOpen,
    title: 'Doświadczenie',
    description: 'Ponad 5 lat doświadczenia w nauczaniu dzieci, młodzieży i dorosłych.',
  },
  {
    icon: Heart,
    title: 'Pasja',
    description: 'Nieustannie rozwijam swoje umiejętności i metody nauczania.',
  },
];

export default function OMnie() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <AnimatedSection className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-8xl mb-4">👩‍🏫</p>
                    <p className="text-xl font-serif text-foreground">Adrianna Nawrot</p>
                    <p className="text-muted-foreground">Założycielka Engleo</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={0.1} className="order-1 lg:order-2">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                O mnie
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-foreground">
                Cześć, jestem <span className="text-primary">Adrianna</span>
              </h1>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Witaj! Cieszę się, że tu trafiłeś/aś. Nazywam się Adrianna Nawrot i jestem 
                  założycielką Engleo — prywatnej szkoły językowej, którą prowadzę z ogromną pasją.
                </p>
                <p>
                  Wierzę, że nauka języka powinna być przyjemnością, a nie przykrym obowiązkiem. 
                  Dlatego każdą lekcję przygotowuję indywidualnie, dostosowując ją do potrzeb, 
                  celów i stylu uczenia się mojego ucznia.
                </p>
                <p>
                  Nie jestem wielką korporacją ani siecią szkół. Jestem jedną osobą, która 
                  poświęca 100% uwagi każdemu ze swoich uczniów. Dzięki temu mogę zapewnić 
                  najwyższą jakość nauczania i prawdziwie indywidualne podejście.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/kontakt">
                    Porozmawiajmy
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Moja droga do nauczania
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <AnimatedCard
                key={milestone.title}
                delay={index * 0.1}
                className="bg-background rounded-2xl p-8 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <milestone.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">
                  {milestone.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Moja filozofia nauczania
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Każdy może nauczyć się angielskiego.</strong> Tak, również Ty! 
                  Nie wierzę w "brak talentu do języków". Wierzę w odpowiednie metody, 
                  cierpliwość i regularną praktykę.
                </p>
                <p>
                  <strong className="text-foreground">Błędy są częścią procesu.</strong> Na moich lekcjach nie ma 
                  miejsca na stres. Błędy to naturalny element nauki — popełniając je, 
                  uczymy się najszybciej.
                </p>
                <p>
                  <strong className="text-foreground">Nauka powinna być przyjemna.</strong> Nudne podręczniki i 
                  monotonne ćwiczenia? Nie u mnie! Używam nowoczesnych, interaktywnych 
                  materiałów, które angażują i motywują.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
                <blockquote className="text-2xl font-serif text-foreground leading-relaxed">
                  "Moim celem nie jest tylko nauczyć Cię angielskiego. Chcę, żebyś pokochał/a 
                  ten język i z pewnością siebie używał/a go w każdej sytuacji."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">💙</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Adrianna Nawrot</p>
                    <p className="text-sm text-muted-foreground">Założycielka Engleo</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
