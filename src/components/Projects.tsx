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
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { projects } from "@/data/portfolio";

interface ProjectCardProps {
  project: typeof projects[0];
  onViewDetails: (id: string) => void;
  loading?: boolean;
}

function ProjectCard({ project, onViewDetails, loading = false }: ProjectCardProps) {
  if (loading) {
    return (
      <Card className="overflow-hidden">
        <Skeleton className="h-48 w-full" />
        <CardHeader>
          <Skeleton className="h-7 w-3/4 mb-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex flex-wrap gap-2 mt-4">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-6 w-16" />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-9 w-32" />
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          onClick={() => onViewDetails(project.id)}
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ProjectsProps {
  onViewDetails: (id: string) => void;
}

export default function Projects({ onViewDetails }: ProjectsProps) {
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
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
