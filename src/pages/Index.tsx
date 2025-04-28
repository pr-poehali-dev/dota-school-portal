
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import GuidesSection from "@/components/GuidesSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <Hero />
      
      <NewsSection />
      
      <GuidesSection />
      
      {/* Турниры и мероприятия секция */}
      <div className="py-12 bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2a2e39] rounded-lg p-8 border border-[#2a2e39] relative overflow-hidden">
            <div className="max-w-lg relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Школьные турниры по Dota 2</h2>
              <p className="text-gray-300 mb-6">
                Участвуйте в регулярных школьных турнирах, развивайте командные навыки и соревнуйтесь 
                со сверстниками в безопасной и дружелюбной атмосфере.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#9b87f5] rounded-full p-2 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">Соревнования для команд разного уровня подготовки</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#9b87f5] rounded-full p-2 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">Призы и награды для победителей</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#9b87f5] rounded-full p-2 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">Профессиональная организация и трансляции матчей</p>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white" asChild>
                  <Link to="/tournaments">Узнать о турнирах</Link>
                </Button>
              </div>
            </div>
            
            <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1567241644595-13a6f33d4bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Tournament Trophy" 
                className="w-64 md:w-80"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Безопасность секция */}
      <div className="py-12 bg-[#222534]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Безопасное комьюнити для школьников</h2>
              <p className="text-gray-300 mb-6">
                Мы создаем контролируемую среду, где школьники могут изучать Dota 2, 
                общаться и развиваться без токсичности и негативного опыта.
              </p>
              <Separator className="my-6 bg-[#2a2e39]" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <div className="text-2xl mb-2">🛡️</div>
                  <h3 className="text-lg font-medium mb-2">Модерация</h3>
                  <p className="text-sm text-gray-400">Постоянный контроль за соблюдением правил общения</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl mb-2">🔍</div>
                  <h3 className="text-lg font-medium mb-2">Проверка</h3>
                  <p className="text-sm text-gray-400">Верификация пользователей через школьные аккаунты</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl mb-2">📝</div>
                  <h3 className="text-lg font-medium mb-2">Правила</h3>
                  <p className="text-sm text-gray-400">Четкие и понятные правила взаимодействия</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl mb-2">🤝</div>
                  <h3 className="text-lg font-medium mb-2">Поддержка</h3>
                  <p className="text-sm text-gray-400">Система помощи и реагирования на проблемы</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5]" asChild>
                  <Link to="/safety">Подробнее о безопасности</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Safe Community" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
