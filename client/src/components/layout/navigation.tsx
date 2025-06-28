import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pool-blue-500 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Vinil Vale</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-pool-blue-500 transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-700 hover:text-pool-blue-500 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-gray-700 hover:text-pool-blue-500 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-pool-blue-500 transition-colors font-medium"
            >
              Contato
            </button>
            <Button
              onClick={scrollToForm}
              className="bg-pool-green-500 hover:bg-pool-green-600 text-white font-semibold"
            >
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-left text-gray-700 hover:text-pool-blue-500 transition-colors font-medium py-2"
                  >
                    Início
                  </button>
                  <button
                    onClick={() => scrollToSection("beneficios")}
                    className="text-left text-gray-700 hover:text-pool-blue-500 transition-colors font-medium py-2"
                  >
                    Benefícios
                  </button>
                  <button
                    onClick={() => scrollToSection("depoimentos")}
                    className="text-left text-gray-700 hover:text-pool-blue-500 transition-colors font-medium py-2"
                  >
                    Depoimentos
                  </button>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-left text-gray-700 hover:text-pool-blue-500 transition-colors font-medium py-2"
                  >
                    Contato
                  </button>
                  <Button
                    onClick={scrollToForm}
                    className="bg-pool-green-500 hover:bg-pool-green-600 text-white font-semibold w-full mt-4"
                  >
                    Orçamento Grátis
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
