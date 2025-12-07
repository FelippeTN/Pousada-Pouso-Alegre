import roomSuite from "@/assets/room-suite.jpg";
import roomDouble from "@/assets/room-double.jpg";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Coffee, AirVent } from "lucide-react";

const AccommodationsSection = () => {
  const rooms = [
    {
      image: roomSuite,
      title: "Quarto Família",
      description: "Quarto espaçoso ideal para famílias, com vista para a natureza",
      capacity: "2-4 pessoas",
      price: "Consultar",
      amenities: ["Wi-Fi", "Ventilador", "Café da manhã", "Roupa de cama"],
    },
    {
      image: roomDouble,
      title: "Quarto Casal",
      description: "Quarto aconchegante com cama de casal",
      capacity: "2 pessoas",
      price: "Consultar",
      amenities: ["Wi-Fi", "Ventilador", "Café da manhã"],
    },
  ];

  return (
    <section id="acomodacoes" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Acomodações
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Acomodações Confortáveis
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Quartos aconchegantes e bem equipados para garantir uma estadia 
            agradável na região serrana de Macuco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="group bg-background rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-body text-sm font-semibold">
                  {room.price}/noite
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {room.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {room.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users size={16} />
                  <span>{room.capacity}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <Button variant="default" className="w-full">
                  Ver Disponibilidade
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
