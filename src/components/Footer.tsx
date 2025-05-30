
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#1A1F2C] text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/favicon.svg" alt="Dota School Logo" className="h-8 w-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] bg-clip-text text-transparent">Dota Школа</span>
            </Link>
            <p className="text-sm">
              Образовательный проект по Dota 2 для школьников. Безопасное комьюнити, обучение и школьные турниры.
            </p>
            <p className="text-sm mt-2">
              Автор проекта: Михайлов Владимир
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Разделы</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#9b87f5]">Главная</Link></li>
              <li><Link to="/guides" className="hover:text-[#9b87f5]">Обучение</Link></li>
              <li><Link to="/tournaments" className="hover:text-[#9b87f5]">Турниры</Link></li>
              <li><Link to="/safety" className="hover:text-[#9b87f5]">Безопасность</Link></li>
              <li><Link to="/community" className="hover:text-[#9b87f5]">Сообщество</Link></li>
              <li><Link to="/creative" className="hover:text-[#9b87f5]">Творчество</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#9b87f5]">Для учителей</a></li>
              <li><a href="#" className="hover:text-[#9b87f5]">Правила сообщества</a></li>
              <li><a href="#" className="hover:text-[#9b87f5]">Связаться с нами</a></li>
              <li><a href="#" className="hover:text-[#9b87f5]">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Контакты автора</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
              </a>
              <a href="mailto:vladimir.mikhailov@school.ru" className="text-gray-400 hover:text-[#9b87f5]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
            <p className="text-xs">
              Михайлов Владимир — учитель информатики и руководитель киберспортивного клуба.
            </p>
          </div>
        </div>
        
        <Separator className="my-8 bg-[#2a2e39]" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2025 Dota Школа, Михайлов Владимир. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#9b87f5]">Условия использования</a>
            <a href="#" className="hover:text-[#9b87f5]">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#9b87f5]">Cookie-файлы</a>
          </div>
        </div>
        
        <p className="text-xs text-center mt-8 text-gray-500">
          Dota 2 и все связанные с ней товарные знаки являются собственностью Valve Corporation. Этот сайт не аффилирован с Valve Corporation.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
