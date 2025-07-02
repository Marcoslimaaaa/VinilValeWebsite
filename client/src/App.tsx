import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-teal-600">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Vinil Vale Revestimentos
          </h1>
          <p className="text-gray-600 mt-2">
            Especialistas em Revestimento de Vinil para Piscinas
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">
            Transforme sua Piscina com Revestimento de Vinil
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Atendemos Registro, Iguape, Cananéia e toda região do Vale do Ribeira + 200km de raio
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="https://wa.me/5513997305949" 
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              📞 (13) 99730-5949
            </a>
            <a 
              href="mailto:vinilvale@hotmail.com"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              ✉️ vinilvale@hotmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher Vinil Vale?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏊‍♂️</div>
              <h4 className="text-xl font-semibold mb-3">Impermeabilização Total</h4>
              <p className="text-gray-600">
                Revestimento de vinil de alta qualidade que garante impermeabilização completa da sua piscina.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-3">Instalação Rápida</h4>
              <p className="text-gray-600">
                Processo de instalação eficiente com mínimo transtorno para sua rotina.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💪</div>
              <h4 className="text-xl font-semibold mb-3">Durabilidade</h4>
              <p className="text-gray-600">
                Material resistente que mantém sua piscina protegida por muitos anos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Solicite seu Orçamento Gratuito
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Atendemos toda a região do Vale do Ribeira. Entre em contato conosco!
          </p>
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">📍 Localização:</p>
                <p className="text-gray-600">Registro, SP</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">📞 Telefone:</p>
                <a href="https://wa.me/5513997305949" className="text-blue-600 hover:underline">
                  (13) 99730-5949
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-900">✉️ E-mail:</p>
                <a href="mailto:vinilvale@hotmail.com" className="text-blue-600 hover:underline">
                  vinilvale@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Vinil Vale Revestimentos</p>
          <p className="text-gray-400">
            © 2024 - Especialistas em Revestimento de Vinil para Piscinas
          </p>
          <p className="text-gray-400 mt-2">
            Atendemos Vale do Ribeira + 200km de raio
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5513997305949"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        title="Chamar no WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  );
}
