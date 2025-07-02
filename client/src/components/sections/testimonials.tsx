import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Bem eu super indico, profissionais excelentes, entregaram o trabalho bem antes da data do contrato, agradeço grandemente, sem dizer valor super acessível, até hj se eu precisar me dão suporte em tudo.",
      author: "Daniela Santana",
      location: "Cliente Vinil Vale",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128",
    },
    {
      quote: "Serviço top, entrega antes do prazo e prestadores super simpáticos. Raridade aqui em Registro",
      author: "Iran de Paula Novaes",
      location: "Registro, SP",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128",
    },
    {
      quote: "Excelente profissional e trabalho ficou ótimo",
      author: "Luiz Anselmo Rodrigues",
      location: "Vale do Ribeira",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128",
    },
    {
      quote: "Um profissional muito atencioso, esclarece todas as dúvidas sem enrolação com um preço super justo, material de... Exibir avaliação completa",
      author: "Alex Sandro Silva",
      location: "Cliente Vinil Vale",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Veja o que Nossos Clientes estão{" "}
            <span className="vinyl-blue-500">Amando!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos reais de quem transformou sua piscina conosco!
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="overflow-hidden rounded-2xl">
            <CardContent className="p-8 md:p-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="flex justify-center mb-6">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.author} cliente satisfeito`}
                          className="w-16 h-16 rounded-full mr-4 object-cover"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">{testimonial.author}</div>
                          <div className="text-gray-600">{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-vinyl-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
