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
import { projects } from "@/data/portfolio";
import ScrollAnimationWrapper, { ScrollAnimationItem } from "./ScrollAnimationWrapper";

interface ProjectCardProps {
  project: typeof projects[0];
  onViewDetails: (id: string) => void;
}

function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  // Handle click with prevent default to avoid scrolling issues
  const handleViewDetailsClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onViewDetails(id);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div
        className="h-64 w-full object-cover -mt-6"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover'
        }}
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-foreground/80 mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          variant="outline"
          onClick={(e) => handleViewDetailsClick(e, project.id)}
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
  // Immediately navigate to the detail view
  const handleViewDetails = (id: string) => {
    // Just call the passed-in handler directly
    onViewDetails(id);
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper
          animation="fadeUp"
          repeat={true}
          threshold={0.3}
          margin="-50px"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerChildren={true}
          staggerDelay={0.2}
          repeat={true}
          threshold={0.2}
          margin="-70px"
        >
          {projects.map((project, index) => (
            <ScrollAnimationItem key={project.id} animation="fadeUp" index={index} className="h-full">
              <ProjectCard
                project={project}
                onViewDetails={handleViewDetails}
              />
            </ScrollAnimationItem>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
