import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { personalInfo, navLinks } from "@/data/portfolio";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b py-3">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-3">
          <Avatar className="size-8 md:size-10">
            {!imageLoaded && <Skeleton className="size-full rounded-full" />}
            <AvatarImage
              src={personalInfo.avatarImage}
              alt={personalInfo.name}
              onLoad={() => setImageLoaded(true)}
              className={imageLoaded ? "opacity-100" : "opacity-0"}
            />
            <AvatarFallback>{personalInfo.avatarInitials}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-base md:text-lg hidden sm:inline-block">{personalInfo.name}</span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-2 md:px-3 py-2 text-sm md:text-base"
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />

          {/* Mobile Navigation using shadcn Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block sm:hidden">
              <Button variant="outline" size="icon" className="relative h-9 w-9 flex items-center justify-center" aria-label="Menu">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a
                    href={link.href}
                    className="cursor-pointer w-full"
                  >
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}