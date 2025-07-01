import { Waves, Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-vinyl-blue-500 rounded-lg flex items-center justify-center">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">Vinil Vale Revestimentos</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformando piscinas com qualidade e confiança há anos. Sua satisfação é nossa prioridade.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 vinyl-teal-400" />
                <span className="text-gray-300">contato@vinilvale.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 vinyl-teal-400" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 vinyl-teal-400" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-vinyl-blue-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-vinyl-blue-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Vinil Vale Revestimentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
