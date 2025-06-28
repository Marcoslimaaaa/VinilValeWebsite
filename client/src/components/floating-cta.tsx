import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToForm}
        className="bg-pool-green-500 hover:bg-pool-green-600 text-white font-semibold shadow-2xl animate-pulse"
      >
        <PhoneCall className="w-5 h-5 mr-2" />
        Orçamento Grátis
      </Button>
    </div>
  );
}
