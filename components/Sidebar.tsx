"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Route, routes } from "@/constants/routes";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function findActiveRoute(routes: Route[], pathname: string) {
  return (
    routes.find(
      (route) => route.href.length > 1 && pathname.includes(route.href)
    ) || routes[0]
  );
}

function MenuItems({
  activeRoute,
  onClick,
}: {
  activeRoute: Route;
  onClick?: () => void;
}) {
  return routes.map((route) => (
    <Link
      href={route.href}
      key={route.href}
      className={buttonVariants({
        variant:
          activeRoute.href === route.href ? "sidebarActiveItem" : "sidebarItem",
      })}
      onClick={onClick}
    >
      <route.icon size={20} />
      {route.label}
    </Link>
  ));
}

export function Sidebar() {
  const pathname = usePathname();
  const activeRoute = findActiveRoute(routes, pathname);

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate">
        <Logo />
      </div>
      <div className="flex flex-col p-2">
        <MenuItems activeRoute={activeRoute} />
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeRoute = findActiveRoute(routes, pathname);

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side="left"
          >
            <Logo />
            <div className="flex flex-col gap-1">
              <MenuItems
                activeRoute={activeRoute}
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
