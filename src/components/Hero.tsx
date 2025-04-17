import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="py-20 flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-primary">{personalInfo.name}</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
        {personalInfo.title}
      </h2>
      <p className="text-lg max-w-2xl mb-10">
        {personalInfo.bio}
      </p>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <a href="#projects">View My Work</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">Download Resume</a>
        </Button>
      </div>
    </section>
  );
}
