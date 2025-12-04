import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-sand py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">
              Pousada Pouso Alegre
            </h3>
            <p className="font-body text-sand/70 text-sm">
              Seu refúgio na natureza
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-sand/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-sand/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="tel:+5535999999999"
              className="w-10 h-10 rounded-full bg-sand/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-sand/20 mt-8 pt-8 text-center">
          <p className="font-body text-sand/60 text-sm">
            © {new Date().getFullYear()} Pousada Pouso Alegre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
