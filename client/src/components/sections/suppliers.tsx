import { ShieldCheck } from "lucide-react";

export default function Suppliers() {
  const suppliers = ["Acqualiner", "Sansui", "Sipatex", "Locomotiva"];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Parcerias com as{" "}
            <span className="vinyl-blue-500">Melhores Marcas</span> do Mercado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos apenas com fornecedores de confiança, garantindo a mais alta qualidade em todos os nossos produtos e serviços.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {suppliers.map((supplier, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 w-full h-24 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-lg text-gray-700">{supplier}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-medium">
            <ShieldCheck className="w-5 h-5 inline mr-2 vinyl-teal-500" />
            Qualidade garantida pelos melhores do mercado
          </p>
        </div>
      </div>
    </section>
  );
}
