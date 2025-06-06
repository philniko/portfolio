import { useState } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";
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
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { motion, useScroll, useTransform } from "framer-motion";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ currentView = "home", onNavigate }: NavbarProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(var(--background-rgb), 0.8)", "rgba(var(--background-rgb), 0.95)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 6px rgba(0,0,0,0.1)"]
  );

  const headerPadding = useTransform(
    scrollY,
    [0, 100],
    ["0.75rem", "0.5rem"]
  );

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.href.startsWith('#')) {
      e.preventDefault();

      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      // If we're in a detail view, navigate back to home view first
      if (currentView !== "home") {
        onNavigate("home");

        // Wait for the view change to complete before scrolling
        setTimeout(() => {
          if (link.href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            smoothScrollTo(link.href.slice(1));
          }
        }, 50);
      } else {
        // If already on home view, just scroll
        if (link.href === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          smoothScrollTo(link.href.slice(1));
        }
      }
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-10 w-full border-b py-3 backdrop-blur-sm"
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3 md:gap-3">
          <Avatar className="size-11 sm:size-9">
            {!imageLoaded && <Skeleton className="size-full rounded-full" />}
            <AvatarImage
              src={personalInfo.avatarImage}
              alt={personalInfo.firstName + " " + personalInfo.lastName}
              onLoad={() => setImageLoaded(true)}
              className={`object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
            <AvatarFallback>{personalInfo.avatarInitials}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-base md:text-lg hidden sm:inline-block">{personalInfo.firstName + " " + personalInfo.lastName}</span>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-2 md:px-3 py-2 text-sm md:text-base"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="scale-120 sm:scale-100">
            <ModeToggle />
          </div>
          {/* Mobile Navigation using shadcn Dropdown */}
          <div className="scale-120 sm:scale-100">
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild className="sm:hidden">
                <Button
                  variant="outline"
                  size="icon"
                >
                  <Menu className={`h-[1.2rem] w-[1.2rem] transition-all ${isMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                  <X className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isMenuOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <a
                      href={link.href}
                      className="cursor-pointer w-full py-2"
                      onClick={(e) => handleNavClick(e, link)}
                    >
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
