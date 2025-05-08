import { useState, useEffect, useRef } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ExperienceDetail from "./components/ExperienceDetail";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [view, setView] = useState<string>("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // Store scroll position before navigation
  const scrollPositionRef = useRef(0);

  // Handle view changes with loading states
  const handleViewChange = (newView: string, id?: string) => {
    // Store current scroll position
    scrollPositionRef.current = window.scrollY;

    // Immediately update the view state to navigate to the new page
    setView(newView);

    // Start loading state for the detail view
    setLoading(true);

    if (newView === "project-detail" && id) {
      setSelectedProjectId(id);
      // Update hash without triggering native scroll behavior
      history.replaceState(null, "", `#project-${id}`);
    } else if (newView === "experience-detail" && id) {
      setSelectedExperienceId(id);
      // Update hash without triggering native scroll behavior
      history.replaceState(null, "", `#experience-${id}`);
    } else if (newView === "home") {
      window.location.hash = "";
    }

    // Reset scroll to top for detail views
    requestAnimationFrame(() => {
      if (newView === "project-detail" || newView === "experience-detail") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // End loading state after a short delay to show skeleton loading state
    setTimeout(() => {
      setLoading(false);
    }, 800);
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

  // Return to home view with position restoration
  const handleBackToHome = () => {
    // Change hash without page jump
    history.replaceState(null, "", "#");

    // Immediately navigate back to home
    setView("home");
  };

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
            onBack={handleBackToHome}
            loading={loading}
          />
        );

      case "experience-detail":
        if (!selectedExperienceId) return null;
        return (
          <ExperienceDetail
            id={selectedExperienceId as any}
            onBack={handleBackToHome}
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
            <Contact />
          </>
        );
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <Navbar currentView={view} onNavigate={setView} />
        <main className="flex-1">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
