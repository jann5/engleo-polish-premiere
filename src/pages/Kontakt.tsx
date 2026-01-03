import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Kontakt() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to backend
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Wiadomość wysłana!',
      description: 'Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Kontakt
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
              Porozmawiajmy o <span className="text-primary">Twojej nauce</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Masz pytania? Chcesz umówić się na bezpłatną konsultację? 
              Napisz do mnie — odpowiem najszybciej jak to możliwe.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Wyślij wiadomość
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i nazwisko *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jan Kowalski"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jan@example.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+48 123 456 789"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Wiadomość *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Napisz, czego szukasz — np. kursu dla dziecka, przygotowania do matury, angielskiego biznesowego..."
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Wysyłanie...'
                    ) : (
                      <>
                        Wyślij wiadomość
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Dane kontaktowe
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a 
                          href="mailto:kontakt@engleo.pl" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          kontakt@engleo.pl
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Telefon</h3>
                        <a 
                          href="tel:+48123456789" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +48 123 456 789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Lokalizacja</h3>
                        <p className="text-muted-foreground">
                          Polska (lekcje online dostępne dla wszystkich)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Godziny kontaktu</h3>
                        <p className="text-muted-foreground">
                          Poniedziałek - Piątek: 9:00 - 20:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ quick */}
                <div className="bg-card rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Bezpłatna konsultacja
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Pierwsza rozmowa jest zawsze bezpłatna! Podczas konsultacji:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Poznaję Twoje cele i potrzeby
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Oceniam Twój aktualny poziom
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Proponuję plan nauki
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Odpowiadam na wszystkie pytania
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
