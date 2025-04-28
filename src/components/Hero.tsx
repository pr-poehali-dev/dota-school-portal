
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-cover bg-center py-16 md:py-24" 
         style={{ 
           backgroundImage: "linear-gradient(rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.9)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
           backgroundAttachment: "fixed"
         }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Добро пожаловать в <span className="text-[#9b87f5]">Dota Школу</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Образовательный проект, где школьники могут изучать Dota 2, участвовать в турнирах 
            и развивать навыки стратегического мышления в безопасной среде
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white" size="lg" asChild>
              <Link to="/guides">Начать обучение</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-[#9b87f5] text-[#9b87f5]" asChild>
              <Link to="/tournaments">Школьные турниры</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 right-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1659542891088-52e51c6dfdc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
          alt="Dota 2 Hero Silhouette" 
          className="w-64 md:w-96"
        />
      </div>
    </div>
  );
}

export default Hero;
