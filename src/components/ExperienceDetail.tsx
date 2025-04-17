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
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#experience" onClick={onBack}>Experience</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{experience.company}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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
              {experience.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <Button
            className="mt-8"
            onClick={onBack}
          >
            Back to Experience
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
