import { Leaf, Heart, Mountain } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Mata Atlântica",
      description: "Rodeada pela exuberante Mata Atlântica da região serrana",
    },
    {
      icon: Heart,
      title: "Ambiente Familiar",
      description: "Atendimento acolhedor em uma hospedaria de gestão familiar",
    },
    {
      icon: Mountain,
      title: "Localização Estratégica",
      description: "Próximo às belezas naturais e atrações de Macuco e região",
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
            Aconchego e Natureza em Macuco
          </h2>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            A Hospedaria Pouso Alegre está localizada em Macuco, na bela região serrana do estado do Rio de Janeiro. 
            Nossa hospedaria oferece um ambiente acolhedor e familiar, ideal para quem busca descanso e contato com 
            a natureza, cercado pela Mata Atlântica e próximo às principais atrações da região.
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
