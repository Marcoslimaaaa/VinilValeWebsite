import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "/attached_assets/photo_5073356202469076357_y_1751416022778.jpg",
      alt: "Piscina residencial com revestimento de vinil azul e deck de madeira",
      title: "Revestimento Vinil Azul Premium",
      description: "Acabamento perfeito com deck de madeira"
    },
    {
      src: "/attached_assets/photo_5073356202469076355_y_1751416022779.jpg",
      alt: "Piscina com estampa em pastilhas azuis e área de lazer",
      title: "Estampa Pastilhas Azuis",
      description: "Design moderno e sofisticado"
    },
    {
      src: "/attached_assets/photo_5071467855672880623_y_1751416022779.jpg",
      alt: "Piscina moderna com spa e deck em madeira",
      title: "Conjunto Piscina + Spa",
      description: "Área de relaxamento completa"
    },
    {
      src: "/attached_assets/photo_5073356202469076353_y_1751416022780.jpg",
      alt: "Piscina com cascata e revestimento em vinil azul",
      title: "Piscina com Cascata",
      description: "Elemento decorativo e relaxante"
    },
    {
      src: "/attached_assets/photo_5073356202469076351_y_1751416022780.jpg",
      alt: "Piscina infantil com estampa em pastilhas azuis",
      title: "Piscina Infantil",
      description: "Segurança e diversão para crianças"
    },
    {
      src: "/attached_assets/photo_5087002949951008085_y_1751416022780.jpg",
      alt: "Piscina com revestimento turquesa e deck modular",
      title: "Revestimento Turquesa",
      description: "Cor vibrante e acabamento de qualidade"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Nossos <span className="vinyl-blue-500">Trabalhos Realizados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossos revestimentos em vinil de alta qualidade! Oferecemos uma ampla variedade de cores e estampas exclusivas para transformar sua piscina em um verdadeiro oásis.
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="font-semibold text-xl md:text-2xl mb-2">{image.title}</h3>
                      <p className="text-sm md:text-base opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 shadow-lg rounded-full hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 shadow-lg rounded-full hover:bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-vinyl-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentImageIndex ? "ring-2 ring-vinyl-blue-500" : ""
              }`}
              onClick={() => goToImage(index)}
            >
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Gostou do que viu? Sua piscina pode ser a próxima transformação!
          </p>
          <Button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-vinyl-teal-500 hover:bg-vinyl-teal-600 text-white font-semibold text-lg px-8 py-3"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Solicitar Meu Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}