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
  // Removed loading state as we'll handle it in the detail view

  // Immediately navigate to the detail view
  const handleViewDetails = (id: string) => {
    onViewDetails(id);
  };

  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
