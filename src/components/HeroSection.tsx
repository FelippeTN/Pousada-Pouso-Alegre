import heroImage from "@/assets/hero-pousada.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pousada Pouso Alegre ao entardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-brown/40 via-warm-brown/30 to-warm-brown/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-sand mb-6 opacity-0 animate-fade-up">
          Bem-vindo à
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 opacity-0 animate-fade-up animation-delay-200">
          Hospedaria Pouso Alegre
        </h1>
        <p className="font-body text-lg md:text-xl text-sand/90 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-400">
          Seu refúgio de tranquilidade em Macuco, na Serra do Rio de Janeiro. Desfrute do conforto e da hospitalidade em meio à natureza exuberante.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600">
          <Button variant="accent" size="lg" className="min-w-[200px]">
            Reserve Sua Estadia
          </Button>
          <Button variant="hero" size="lg" className="min-w-[200px]">
            Conhecer a Pousada
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
