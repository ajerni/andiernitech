"use client";

import * as React from "react";
import { ExternalLink, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

// Add new projects here
const projects = [
  {
    id: 1,
    name: "Personal Website",
    description:
      "My personal website built with Django. Shows some personal photos, games and stuff I did in the past.",
    preview: "/screenshots/personal-website.png",
    link: "https://www.andierni.ch",
    github: "https://github.com/ajerni/andierni",
  },
  {
    id: 2,
    name: "Personal Blog",
    description:
      "My blog. Basically used for testing and playing around with new technologies.",
    preview: "/screenshots/personal-blog.png",
    link: "https://blog.andierni.ch",
    github: "https://github.com/ajerni/andiblog",
  },
  {
    id: 3,
    name: "Personal Bot",
    description:
      "My personal bot. Able to manage my tasks and calendar, sending e-mails and more. Connected to n8n to run agents",
    preview: "/screenshots/bot.png",
    link: "https://bot.andierni.ch",
    github: "https://github.com/ajerni/bot",
  },
  {
    id: 4,
    name: "Wine Cellar - www.mywine.info",
    description:
      "My wine cellar management system. Fully fledged web app using Next.js, Tailwind CSS, PostgreSQL, FastAPI and Langchain for AI features.",
    preview: "/screenshots/wine-cellar.png",
    link: "https://mywine.info",
    github: "https://github.com/ajerni/mywine",
  },
  {
    id: 5,
    name: "www.ernilabs.com",
    description: "The ultimate docker host for IoT and AI projects",
    preview: "/screenshots/ernilabs.png",
    link: "https://www.ernilabs.com",
    github: "https://github.com/ajerni",
  },
  {
    id: 6,
    name: "LLM's & AI Playground",
    description:
      "Langchain (Python) and LLMs (Large Language Models) AI playground. Ask Andi for password :-).",
    preview: "/screenshots/langchain-streamlit.png",
    link: "https://erni-langchain.streamlit.app/",
    github: "https://github.com/ajerni/erni-langchain",
  },
  {
    id: 7,
    name: "Rust and PostgreSQL",
    description:
      "PostgreSQL database 💾 application written in Rust 🦀 using the SQLX library and serving it with Actix webserver. Also includes a Bevy Engine 🎮 game.",
    preview: "/screenshots/rust-sqlx.png",
    link: "https://rust-sqlx.onrender.com/htmx",
    github: "https://github.com/ajerni/rust-sqlx",
  },
  {
    id: 8,
    name: "Mini-sites and tests",
    description: "A sample of minisites and tests I did over the years.",
    preview: "/screenshots/minisites-preview.png",
    link: "/minisites",
    github: "https://github.com/ajerni/",
  },
  {
    id: 9,
    name: "Games",
    description: "Some funny mini games. Most game ideas came from my kids :-)",
    preview: "/screenshots/games-preview.png",
    link: "/games",
    github: "https://github.com/ajerni/",
  },
];

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  // useEffect to preload images
  React.useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.preview;
    });
  }, []);

  const ProjectsList = () => (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project.id}>
                <SidebarMenuButton
                  onClick={() => {
                    setSelectedProject(project);
                    if (isMobile) setMobileMenuOpen(false);
                  }}
                  isActive={selectedProject.id === project.id}
                >
                  {project.name}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );

  return (
    <SidebarProvider>
      {isMobile ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-[200] flex items-center gap-3 bg-background p-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className="bg-background"
            >
              <Menu className="h-4 w-4" />
            </Button>
            <img
              src="/logobw.png"
              alt="Andierni Tech Logo"
              className="h-8 w-auto scale-125"
            />
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetContent side="left" className="w-[240px] p-0">
              <SidebarHeader className="border-b px-4 py-2">
                <img
                  src="/logobw.png"
                  alt="Andierni Tech Logo"
                  className="h-12 w-auto mb-2 scale-125"
                />
                <h2 className="text-lg font-semibold">Projects</h2>
              </SidebarHeader>
              <ProjectsList />
            </SheetContent>
          </Sheet>
        </>
      ) : (
        <Sidebar className="border-r bg-background">
          <SidebarHeader className="border-b px-4 py-2">
            <img
              src="/logobw.png"
              alt="Andierni Tech Logo"
              className="h-12 w-auto mb-2 scale-125"
            />
            <h2 className="text-lg font-semibold">Projects</h2>
          </SidebarHeader>
          <ProjectsList />
        </Sidebar>
      )}

      <SidebarInset className={`min-h-screen ${isMobile ? "w-full" : ""}`}>
        <main className={`flex-1 p-6 ${isMobile ? "pt-20" : ""} relative z-0`}>
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>{selectedProject.name}</CardTitle>
              <CardDescription>{selectedProject.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <img
                  src={selectedProject.preview}
                  alt={`Preview of ${selectedProject.name}`}
                  className="aspect-video w-full object-cover"
                />
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button asChild className="flex-1 sm:flex-none min-w-[120px]">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Project
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 sm:flex-none min-w-[120px]"
                >
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
