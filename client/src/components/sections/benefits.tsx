import { Card, CardContent } from "@/components/ui/card";
import { Shield, Palette, PiggyBank, Sparkles, Umbrella, Thermometer, ShieldCheck } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Durabilidade Imbatível",
      description: "Nosso vinil resiste a tudo: sol, cloro e anos de uso! Invista uma vez e desfrute por mais de 10 anos.",
      color: "bg-vinyl-blue-100 group-hover:bg-vinyl-blue-500",
      iconColor: "text-vinyl-blue-500 group-hover:text-white",
    },
    {
      icon: Palette,
      title: "Beleza Personalizada",
      description: "Escolha entre cores e acabamentos que combinam com seu estilo. Sua piscina, sua personalidade!",
      color: "bg-vinyl-teal-100 group-hover:bg-vinyl-teal-500",
      iconColor: "text-vinyl-teal-500 group-hover:text-white",
    },
    {
      icon: PiggyBank,
      title: "Economia Real",
      description: "Mais acessível que outros revestimentos, sem abrir mão da qualidade. Beleza que cabe no seu bolso!",
      color: "bg-yellow-100 group-hover:bg-yellow-500",
      iconColor: "text-yellow-500 group-hover:text-white",
    },
    {
      icon: Sparkles,
      title: "Manutenção Zero Stress",
      description: "Limpeza rápida para você curtir sua piscina sem preocupação. Mais tempo para o que importa!",
      color: "bg-purple-100 group-hover:bg-purple-500",
      iconColor: "text-purple-500 group-hover:text-white",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Por que a Vinil Vale é a{" "}
            <span className="vinyl-blue-500">Melhor Escolha</span> para Sua Piscina?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua piscina com nossos revestimentos de vinil de alta qualidade e descubra por que somos a escolha preferida de centenas de famílias!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${benefit.color}`}>
                  <benefit.icon className={`w-8 h-8 transition-colors ${benefit.iconColor}`} />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-vinyl-blue-50 to-vinyl-teal-50 rounded-2xl p-8 text-center">
          <h3 className="font-semibold text-2xl text-gray-900 mb-4">
            <Umbrella className="w-6 h-6 inline mr-2 vinyl-blue-500" />
            Proteção Completa para Sua Piscina
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            <strong>Nossas capas de proteção e térmicas mantêm sua piscina segura e aquecida o ano todo!</strong>{" "}
            Economize energia, proteja sua família e mantenha a água sempre limpa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center vinyl-blue-700">
              <Thermometer className="w-5 h-5 mr-2" />
              <span className="font-medium">Capas Térmicas</span>
            </div>
            <div className="flex items-center justify-center vinyl-teal-700">
              <ShieldCheck className="w-5 h-5 mr-2" />
              <span className="font-medium">Capas de Proteção</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
