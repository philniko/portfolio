import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { skillsData } from "@/data/portfolio";
import "devicon/devicon.min.css";

// Mapping of individual skills to their DevIcon classes
const skillIcons: { [key: string]: string } = {
  // Frontend
  "HTML5": "devicon-html5-plain",
  "CSS3": "devicon-css3-plain",
  "JavaScript": "devicon-javascript-plain",
  "TypeScript": "devicon-typescript-plain",
  "React": "devicon-react-original",
  "Next.js": "devicon-nextjs-original-wordmark",
  "Angular": "devicon-angularjs-plain",
  "Tailwind CSS": "devicon-tailwindcss-plain",

  // Backend
  "Node.js": "devicon-nodejs-plain",
  "Express": "devicon-express-original",
  "Django": "devicon-django-plain",
  "REST API": "devicon-djangorest-plain",
  ".NET": "devicon-dotnetcore-plain",
  "Entity Framework": "devicon-dotnetcore-plain", // No specific EF icon
  "C#": "devicon-csharp-plain",
  "Java": "devicon-java-plain",
  "Python": "devicon-python-plain",
  "C": "devicon-c-plain",

  // Database
  "MongoDB": "devicon-mongodb-plain",
  "PostgreSQL": "devicon-postgresql-plain",
  "MySQL": "devicon-mysql-plain",
  "SQLite": "devicon-sqlite-plain",
  "Firebase": "devicon-firebase-plain",

  // DevOps & Tools
  "Git": "devicon-git-plain",
  "GitHub": "devicon-github-original",
  "Docker": "devicon-docker-plain",
  "Vercel": "devicon-vercel-original",
  "CI/CD": "devicon-github-original",
  "Cypress": "devicon-cypressio-plain",
  "Handlebars": "devicon-handlebars-plain",
  "Jest": "devicon-jest-plain",
  "Vite": "devicon-vitejs-plain",
  "Vscode": "devicon-vscode-plain",
  "Neovim": "devicon-neovim-plain",

  // Design
  "Figma": "devicon-figma-plain",
  "Photoshop": "devicon-photoshop-plain",
  "Illustrator": "devicon-illustrator-plain",
};

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
        <div className="flex flex-wrap gap-2 items-center">
          {skills.map(skill => (
            <Badge key={skill} variant="secondary" className="flex items-center gap-2">
              {skillIcons[skill] && (
                <i className={`devicon ${skillIcons[skill]} colored text-lg`}></i>
              )}
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Skills() {
  const loading = false;
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
