import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { skillsData } from "@/data/portfolio";

interface SkillCategoryProps {
  category: string;
  skills: string[];
  loading?: boolean;
}

function SkillCategory({ category, skills, loading = false }: SkillCategoryProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-1/3" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {Array(Math.floor(Math.random() * 5) + 5).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{category}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Skills() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
