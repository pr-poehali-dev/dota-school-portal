
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  return (
    <div className="bg-[#1A1F2C] text-white py-4 px-4 md:px-8 border-b border-[#2a2e39]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/favicon.svg" alt="Dota School Logo" className="h-8 w-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] bg-clip-text text-transparent">Dota Школа</span>
          </Link>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Обучение</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem title="Основы игры" href="/guides#basics">
                    Механики, роли героев и базовые знания
                  </ListItem>
                  <ListItem title="Тактики и стратегии" href="/guides#advanced">
                    Продвинутые техники для опытных игроков
                  </ListItem>
                  <ListItem title="Разборы матчей" href="/guides#analysis">
                    Видеоразборы профессиональных и школьных игр
                  </ListItem>
                  <ListItem title="Герои" href="/guides#heroes">
                    Подробные гайды по героям Dota 2
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/tournaments">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Турниры
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/safety">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Безопасность
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/community">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Сообщество
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/creative">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Творчество
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

export default Navbar;
