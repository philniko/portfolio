import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/portfolio";

interface ExperienceCardProps {
  experience: typeof experiences[0];
  onViewDetails: (id: string) => void;
}

function ExperienceCard({ experience, onViewDetails }: ExperienceCardProps) {
  // Handle click with prevent default to avoid scrolling issues
  const handleViewDetailsClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onViewDetails(id);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{experience.title}</CardTitle>
        <CardDescription>{experience.company} • {experience.period}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{experience.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          onClick={(e) => handleViewDetailsClick(e, experience.id)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ExperienceProps {
  onViewDetails: (id: string) => void;
}

export default function Experience({ onViewDetails }: ExperienceProps) {
  // Determine the grid layout based on the number of experiences
  const gridLayoutClass = experiences.length < 3
    ? "grid grid-cols-1 md:grid-cols-2 justify-center"
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className={`${gridLayoutClass} gap-6`}>
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
