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

export default function Navbar() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
          <span className="font-semibold text-base md:text-lg">{personalInfo.name}</span>
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

          {/* Mobile Navigation Toggle Button with Animation */}
          <button
            className="block sm:hidden transition-transform duration-300 ease-in-out"
            aria-label="Menu"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative w-6 h-6">
              {/* Three separate bars for hamburger */}
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'}`}></span>

              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>

              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'}`}></span>
            </div>
          </button>

          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`
          block sm:hidden w-full bg-background border-t overflow-hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'max-h-96 border-b opacity-100' : 'max-h-0 opacity-0 border-b-0'}
        `}
      >
        <div className="w-full max-w-screen-xl mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-2 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2 py-3 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors transform hover:translate-x-1 duration-200 truncate"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
