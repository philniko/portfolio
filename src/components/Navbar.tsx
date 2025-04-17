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
import { ModeToggle } from "@/components/mode-toggle"; // Import the ModeToggle component

export default function Navbar() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            {!imageLoaded && <Skeleton className="size-full rounded-full" />}
            <AvatarImage
              src={personalInfo.avatarImage}
              alt={personalInfo.name}
              onLoad={() => setImageLoaded(true)}
              className={imageLoaded ? "opacity-100" : "opacity-0"}
            />
            <AvatarFallback>{personalInfo.avatarInitials}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-lg">{personalInfo.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-3 py-2"
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
