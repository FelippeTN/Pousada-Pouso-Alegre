import heroImage from "@/assets/hero-pousada.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomDouble from "@/assets/room-double.jpg";
import poolImage from "@/assets/pool-area.jpg";
import breakfastImage from "@/assets/breakfast.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, alt: "Vista externa da pousada" },
    { src: roomSuite, alt: "Suíte Master" },
    { src: poolImage, alt: "Área da piscina" },
    { src: roomDouble, alt: "Quarto Casal" },
    { src: breakfastImage, alt: "Café da manhã" },
    { src: heroImage, alt: "Jardins" },
  ];

  return (
    <section id="galeria" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Galeria
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Conheça Nossos Espaços
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 ? "h-96 md:h-[500px]" : "h-48 md:h-60"
                }`}
              />
              <div className="absolute inset-0 bg-warm-brown/0 group-hover:bg-warm-brown/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-warm-brown/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
