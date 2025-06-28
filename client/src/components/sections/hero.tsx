import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowDown, ShieldCheck, Clock, Users, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBenefits = () => {
    document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Piscina moderna com revestimento de vinil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pool-blue-900/70 to-pool-blue-700/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
            Tenha a Piscina dos{" "}
            <span className="pool-green-400">Seus Sonhos</span> com a Vinil Vale!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revestimento em vinil de alta qualidade, com beleza duradoura e economia.{" "}
            <strong>Solicite seu orçamento gratuito hoje mesmo!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-pool-green-500 hover:bg-pool-green-600 text-white font-semibold text-lg px-8 py-4 animate-float"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Quero Meu Orçamento Grátis!
            </Button>
            <button
              onClick={scrollToBenefits}
              className="text-white hover:pool-green-400 transition-colors font-medium flex items-center"
            >
              Saiba mais <ArrowDown className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="mt-12 text-white/80 text-sm">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 pool-green-400" />
                <span>Qualidade Garantida</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 pool-green-400" />
                <span>Orçamento em 24h</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 pool-green-400" />
                <span>+500 Clientes Satisfeitos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}
