import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Quanto tempo dura o revestimento de vinil?",
      answer: "Mais de 10 anos com os cuidados certos! Nossos revestimentos de vinil são produzidos com materiais de alta qualidade que resistem ao sol, cloro e uso intenso, garantindo durabilidade excepcional.",
    },
    {
      question: "As capas térmicas realmente economizam energia?",
      answer: "Sim, mantêm a água aquecida por mais tempo! As capas térmicas reduzem a perda de calor em até 80%, diminuindo significativamente o gasto com aquecimento e mantendo sua piscina na temperatura ideal.",
    },
    {
      question: "Vocês atendem minha região?",
      answer: "Atendemos todo o estado de São Paulo! Nossa equipe está preparada para atender desde a capital até o interior, levando qualidade e profissionalismo onde você estiver.",
    },
    {
      question: "O vinil é seguro para crianças?",
      answer: "Totalmente! É antiderrapante e resistente. Nosso vinil possui textura antiderrapante que garante segurança para toda a família, especialmente para as crianças brincarem sem riscos.",
    },
    {
      question: "Como solicito um orçamento?",
      answer: "Preencha o formulário acima e pronto! Em até 24 horas nossa equipe entrará em contato com um orçamento personalizado para seu projeto. É rápido, fácil e sem compromisso.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Suas <span className="pool-blue-500">Dúvidas Respondidas</span>
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as principais dúvidas sobre nossos revestimentos e serviços para você ter total confiança na sua escolha.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100 rounded-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  <strong>{faq.answer.split('!')[0]}!</strong>
                  {faq.answer.split('!').slice(1).join('!')}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
