import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-serif font-bold text-primary">
              Engleo
            </Link>
            <p className="mt-4 text-secondary-foreground/80 max-w-md">
              Indywidualne podejście do nauki języka angielskiego. Pomagam uczniom 
              w każdym wieku odkryć radość z komunikacji w języku angielskim.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/kursy" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Kursy
                </Link>
              </li>
              <li>
                <Link to="/o-mnie" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  O Mnie
                </Link>
              </li>
              <li>
                <Link to="/jak-ucze" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Jak Uczę
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail size={18} className="text-primary" />
                <span>kontakt@engleo.pl</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone size={18} className="text-primary" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin size={18} className="text-primary mt-1" />
                <span>Polska</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Engleo. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-secondary-foreground/60 text-sm">
            Właściciel: Adrianna Nawrot
          </p>
        </div>
      </div>
    </footer>
  );
}
