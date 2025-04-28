
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const guides = [
  {
    id: 1,
    title: "Основы для новичков",
    description: "Изучите базовые механики, интерфейс и терминологию Dota 2",
    level: "beginner",
    icon: "🔰"
  },
  {
    id: 2,
    title: "Роли в команде",
    description: "Подробный разбор всех пяти позиций в команде и их задач",
    level: "beginner",
    icon: "👥"
  },
  {
    id: 3,
    title: "Контроль карты",
    description: "Навыки вардинга, деварда и контроля ключевых точек на карте",
    level: "intermediate",
    icon: "🗺️"
  }
];

export function GuidesSection() {
  return (
    <div className="py-12 bg-[#222534]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Популярные гайды</h2>
          <a href="/guides" className="text-[#9b87f5] hover:text-[#7E69AB] text-sm">
            Все обучающие материалы →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Card key={guide.id} className="bg-[#1A1F2C] border-[#2a2e39] text-white hover:border-[#9b87f5] transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge 
                    variant="outline" 
                    className={`
                      ${guide.level === 'beginner' ? 'border-[#33C3F0] text-[#33C3F0]' : ''}
                      ${guide.level === 'intermediate' ? 'border-[#9b87f5] text-[#9b87f5]' : ''}
                      ${guide.level === 'advanced' ? 'border-[#F97316] text-[#F97316]' : ''}
                    `}
                  >
                    {guide.level === 'beginner' ? 'Новичок' : 
                     guide.level === 'intermediate' ? 'Средний' : 'Продвинутый'}
                  </Badge>
                </div>
                <div className="text-3xl mb-2">{guide.icon}</div>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300">
                <p>{guide.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] text-sm">
                  Изучить →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuidesSection;
