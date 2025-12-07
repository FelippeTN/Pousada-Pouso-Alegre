import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Macuco - RJ, Região Serrana",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(22) 9 9999-9999",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@hospedariapousoalegre.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Check-in: 14h | Check-out: 12h",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block font-body text-sm uppercase tracking-[0.2em] text-sand mb-4">
              Contato
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Venha Nos Visitar
            </h2>
            <p className="font-body text-sand/80 mb-10 text-lg leading-relaxed">
              Estamos prontos para recebê-lo e proporcionar a melhor experiência 
              de hospedagem. Entre em contato e faça sua reserva.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sand/20 flex items-center justify-center flex-shrink-0">
                    <info.icon size={20} className="text-sand" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {info.title}
                    </h3>
                    <p className="font-body text-sand/80">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-lg p-8 shadow-elevated">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Solicite um Orçamento
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="date"
                  placeholder="Data"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <Button variant="accent" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
