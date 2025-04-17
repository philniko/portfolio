import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo, footerInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-muted-foreground">{personalInfo.title}</p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="Email" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn" asChild>
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{footerInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
