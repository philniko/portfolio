import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="home" className="py-20 flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span>Hi, I'm </span>
        <TypeAnimation
          sequence={[
            "",
            500,
            personalInfo.firstName + " " + personalInfo.lastName,
            1000,
            personalInfo.firstName,
            500,
            personalInfo.firstNameAbv,
            1000,
            personalInfo.firstNameAbv + " 👋"
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          className="inline-block text-primary"
        />
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
