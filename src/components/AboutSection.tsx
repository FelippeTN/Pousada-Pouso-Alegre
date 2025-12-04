import { Leaf, Heart, Mountain } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Natureza Exuberante",
      description: "Cercada por jardins tropicais e montanhas deslumbrantes",
    },
    {
      icon: Heart,
      title: "Hospitalidade Calorosa",
      description: "Atendimento personalizado que faz você se sentir em casa",
    },
    {
      icon: Mountain,
      title: "Experiências Únicas",
      description: "Trilhas, cachoeiras e passeios pela região",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Sobre Nós
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Seu Refúgio no Coração da Natureza
          </h2>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Desde 2010, a Pousada Pouso Alegre oferece aos seus hóspedes uma experiência única de 
            hospedagem. Localizada em meio à exuberante natureza do interior, nossa pousada combina 
            o charme rústico com todo o conforto que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-lg bg-card hover:shadow-card transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
