import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smoothScroll";

// Transform projects array into a lookup object for easier access by ID
const projectsData = projects.reduce((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {} as Record<string, typeof projects[0]>);

type ProjectId = keyof typeof projectsData;

interface ProjectDetailProps {
  id: ProjectId;
  onBack: () => void;
  loading?: boolean;
}

export default function ProjectDetail({ id, onBack, loading = false }: ProjectDetailProps) {
  const project = projectsData[id];

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBack();
    // Wait for the back navigation to complete, then scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBack();
    // Wait for the back navigation to complete, then scroll to projects section
    setTimeout(() => {
      smoothScrollTo('projects');
    }, 50);
  };

  const handleBackToProjects = () => {
    onBack();
    // Wait for the back navigation to complete, then scroll to projects section
    setTimeout(() => {
      smoothScrollTo('projects');
    }, 50);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-full max-w-md mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <Skeleton className="h-64 w-full" />
              <CardHeader>
                <Skeleton className="h-8 w-3/4 mb-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-3" />
                <Skeleton className="h-4 w-full mb-3" />
                <Skeleton className="h-4 w-full mb-3" />
                <Skeleton className="h-4 w-full mb-3" />
                <Skeleton className="h-4 w-3/4 mb-6" />
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <Skeleton className="h-7 w-1/2 mb-2" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="h-6 w-16" />
                  ))}
                </div>
                <Skeleton className="h-10 w-full mb-3" />
                <Skeleton className="h-10 w-full mb-6" />
                <Skeleton className="h-10 w-1/2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#home" onClick={handleHomeClick}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#projects" onClick={handleProjectsClick}>Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <div
              className="h-64 bg-cover bg-center -mt-6"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line">
                {project.fullDescription}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div>
                <CardDescription className="mb-2">Technologies Used</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    >
                      <Badge variant="secondary">{tech}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.demoLink &&
                  <Button
                    className="w-full"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      View Live Demo
                    </a>
                  </Button>
                }

                <Button
                  className="w-full"
                  variant="outline"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                </Button>

                <Button
                  className="w-full mt-4"
                  variant="secondary"
                  onClick={handleBackToProjects}
                >
                  Back to Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
