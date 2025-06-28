import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import Suppliers from "@/components/sections/suppliers";
import ContactForm from "@/components/sections/contact-form";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/layout/footer";
import FloatingCTA from "@/components/floating-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Benefits />
      <Testimonials />
      <Suppliers />
      <ContactForm />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
