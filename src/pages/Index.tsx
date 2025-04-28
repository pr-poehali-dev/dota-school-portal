
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import GuidesSection from "@/components/GuidesSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      
      {/* Об авторе проекта */}
      <div className="py-12 bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2a2e39] to-[#1A1F2C] rounded-lg p-8 border border-[#2a2e39]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <Avatar className="h-28 w-28 md:h-32 md:w-32 border-2 border-[#9b87f5]">
                  <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Михайлов Владимир" />
                  <AvatarFallback className="text-2xl">ВМ</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Автор проекта</h2>
                <h3 className="text-xl font-medium text-[#9b87f5] mb-4">Михайлов Владимир</h3>
                <p className="text-gray-300 mb-4">
                  Учитель информатики и руководитель киберспортивного клуба. Создал этот проект, чтобы объединить
                  образовательные элементы и киберспорт, помогая школьникам развивать аналитическое мышление,
                  командные навыки и стратегическое планирование через увлекательную игру Dota 2.
                </p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="mailto:vladimir.mikhailov@school.ru" className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5]">
                    Написать автору
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
