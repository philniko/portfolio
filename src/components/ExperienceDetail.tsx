import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { experiences } from "@/data/portfolio";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smoothScroll";

// Transform experiences array into a lookup object for easier access by ID
const experienceData = experiences.reduce((acc, exp) => {
  acc[exp.id] = exp;
  return acc;
}, {} as Record<string, typeof experiences[0]>);

type ExperienceId = keyof typeof experienceData;

interface ExperienceDetailProps {
  id: ExperienceId;
  onBack: () => void;
  loading?: boolean;
}

export default function ExperienceDetail({ id, onBack, loading = false }: ExperienceDetailProps) {
  const experience = experienceData[id];

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBack();
    // Wait for the back navigation to complete, then scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleExperienceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBack();
    // Wait for the back navigation to complete, then scroll to experience section
    setTimeout(() => {
      smoothScrollTo('experience');
    }, 50);
  };

  const handleBackToExperience = () => {
    onBack();
    // Wait for the back navigation to complete, then scroll to experience section
    setTimeout(() => {
      smoothScrollTo('experience');
    }, 50);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-full max-w-md mb-6" />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-6 w-1/2 mb-2" />
            <Skeleton className="h-5 w-1/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <div className="flex flex-wrap gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-6 w-16" />
              ))}
            </div>
          </CardContent>
        </Card>
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
              <BreadcrumbLink href="#experience" onClick={handleExperienceClick}>Experience</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{experience.company}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{experience.title}</CardTitle>
            <CardDescription className="text-lg">
              {experience.company} • {experience.period}
            </CardDescription>
            <CardDescription>{experience.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-line mb-6">
              {experience.fullDescription}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Skills Used</h3>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  >
                    <Badge variant="secondary">{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button
              className="mt-8"
              onClick={handleBackToExperience}
            >
              Back to Experience
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
