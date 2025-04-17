import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { experiences } from "@/data/portfolio";

interface ExperienceCardProps {
  experience: typeof experiences[0];
  onViewDetails: (id: string) => void;
  loading?: boolean;
}

function ExperienceCard({ experience, onViewDetails, loading = false }: ExperienceCardProps) {
  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <Skeleton className="h-7 w-3/4 mb-2" />
          <Skeleton className="h-5 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-9 w-32" />
        </CardFooter>
      </Card>
    );
  }

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
          onClick={() => onViewDetails(experience.id)}
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
  const [loading, setLoading] = useState(false);

  // Handle view details with loading state
  const handleViewDetails = (id: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onViewDetails(id);
    }, 500);
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
              loading={loading}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
