import poolImage from "@/assets/pool-area.jpg";
import breakfastImage from "@/assets/breakfast.jpg";
import { Waves, UtensilsCrossed, TreePine, Car, Wifi, Mountain } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    { icon: Waves, title: "Área de Lazer", description: "Espaços ao ar livre para relaxamento" },
    { icon: UtensilsCrossed, title: "Café da Manhã", description: "Café da manhã caseiro incluso" },
    { icon: TreePine, title: "Natureza", description: "Contato direto com a Mata Atlântica" },
    { icon: Car, title: "Estacionamento", description: "Estacionamento gratuito" },
    { icon: Wifi, title: "Wi-Fi", description: "Internet sem fio" },
    { icon: Mountain, title: "Região Serrana", description: "Próximo a cachoeiras e trilhas" },
  ];

  return (
    <section id="comodidades" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Comodidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Tudo Para Sua Comodidade
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative h-80 rounded-lg overflow-hidden group">
            <img
              src={poolImage}
              alt="Área da piscina"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent flex items-end p-6">
              <h3 className="font-display text-2xl text-primary-foreground">
                Área de Lazer
              </h3>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden group">
            <img
              src={breakfastImage}
              alt="Café da manhã"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent flex items-end p-6">
              <h3 className="font-display text-2xl text-primary-foreground">
                Gastronomia
              </h3>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="text-center p-6 rounded-lg bg-card hover:bg-secondary transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <amenity.icon size={24} />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                {amenity.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
