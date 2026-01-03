import { AnimatedSection, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anna Kowalska',
    role: 'Mama 8-letniej Zosi',
    content: 'Zosia uwielbia lekcje z panią Adrianną! Nauka przez zabawę przynosi niesamowite efekty. Po kilku miesiącach córka zaczęła sama śpiewać angielskie piosenki.',
    rating: 5,
  },
  {
    name: 'Michał Nowak',
    role: 'Uczeń liceum',
    content: 'Dzięki zajęciom z Engleo zdałem maturę z angielskiego na 95%! Pani Adrianna świetnie tłumaczy gramatykę i pomogła mi przełamać barierę w mówieniu.',
    rating: 5,
  },
  {
    name: 'Katarzyna Wiśniewska',
    role: 'Specjalistka ds. marketingu',
    content: 'Potrzebowałam angielskiego biznesowego do pracy. Lekcje są profesjonalne i elastyczne. Teraz prowadzę spotkania po angielsku z pełną pewnością siebie!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Opinie
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold text-secondary-foreground">
            Co mówią moi uczniowie
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Poznaj historie sukcesu osób, które zdecydowały się uczyć z Engleo.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={testimonial.name}
              delay={index * 0.15}
              className="bg-card rounded-2xl p-8 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={18} />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
