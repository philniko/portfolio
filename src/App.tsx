import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ExperienceDetail from "./components/ExperienceDetail";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";

function App() {
  const [view, setView] = useState<string>("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle view changes with loading states
  const handleViewChange = (newView: string, id?: string) => {
    setLoading(true);

    // Change URL hash if home view
    if (newView === "home") {
      window.location.hash = "";
    }

    setTimeout(() => {
      setView(newView);

      if (newView === "project-detail" && id) {
        setSelectedProjectId(id);
        window.location.hash = `project-${id}`;
      } else if (newView === "experience-detail" && id) {
        setSelectedExperienceId(id);
        window.location.hash = `experience-${id}`;
      }

      setLoading(false);
    }, 300);
  };

  // Handle hash changes and navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);

      if (hash.startsWith("project-")) {
        const projectId = hash.replace("project-", "");
        setView("project-detail");
        setSelectedProjectId(projectId);
      } else if (hash.startsWith("experience-")) {
        const experienceId = hash.replace("experience-", "");
        setView("experience-detail");
        setSelectedExperienceId(experienceId);
      } else {
        setView("home");
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Project view handler
  const handleViewProject = (id: string) => {
    handleViewChange("project-detail", id);
  };

  // Experience view handler
  const handleViewExperience = (id: string) => {
    handleViewChange("experience-detail", id);
  };

  // Render the appropriate view based on the current state
  const renderContent = () => {
    switch (view) {
      case "project-detail":
        if (!selectedProjectId) return null;
        return (
          <ProjectDetail
            id={selectedProjectId as any}
            onBack={() => handleViewChange("home")}
            loading={loading}
          />
        );

      case "experience-detail":
        if (!selectedExperienceId) return null;
        return (
          <ExperienceDetail
            id={selectedExperienceId as any}
            onBack={() => handleViewChange("home")}
            loading={loading}
          />
        );

      default:
        return (
          <>
            <Hero />
            <Experience onViewDetails={handleViewExperience} />
            <Projects onViewDetails={handleViewProject} />
            <Skills />
          </>
        );
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
}

export default App;
