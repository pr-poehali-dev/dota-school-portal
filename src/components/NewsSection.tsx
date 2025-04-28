
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, TrophyIcon, BookOpenIcon } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Весенний турнир по Dota 2",
    description: "Открыта регистрация на весенний школьный турнир! Соберите команду из 5 человек и подайте заявку до 15 мая.",
    date: "28 апреля 2025",
    type: "tournament",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Новый раздел по микроконтролю",
    description: "В разделе обучения появились материалы по микроконтролю юнитов и развитию механических навыков.",
    date: "25 апреля 2025",
    type: "guide",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Обновление The International Battle Pass",
    description: "Valve выпустила новый Battle Pass к предстоящему The International. Узнайте о новинках и эксклюзивных предметах.",
    date: "20 апреля 2025",
    type: "news",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

export function NewsSection() {
  return (
    <div className="py-12 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Последние новости</h2>
          <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] text-sm">
            Все новости →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="bg-[#222534] border-[#2a2e39] text-white overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge 
                    variant="outline" 
                    className={`
                      ${item.type === 'tournament' ? 'border-[#33C3F0] text-[#33C3F0]' : ''}
                      ${item.type === 'guide' ? 'border-[#9b87f5] text-[#9b87f5]' : ''}
                      ${item.type === 'news' ? 'border-[#F97316] text-[#F97316]' : ''}
                    `}
                  >
                    {item.type === 'tournament' && <TrophyIcon className="h-3 w-3 mr-1" />}
                    {item.type === 'guide' && <BookOpenIcon className="h-3 w-3 mr-1" />}
                    {item.type === 'news' && <CalendarIcon className="h-3 w-3 mr-1" />}
                    {item.type === 'tournament' ? 'Турнир' : 
                     item.type === 'guide' ? 'Обучение' : 'Новость'}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-gray-400 text-xs">
                  {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-300">
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] text-sm">
                  Подробнее →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
