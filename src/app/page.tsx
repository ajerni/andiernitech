"use client"

import * as React from "react"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

// Add new projects here
const projects = [
  {
    id: 1,
    name: "Personal Website",
    description: "My personal website built with Django. Shows some personal photos, games and stuff I did in the past.",
    preview: "/screenshots/personal-website.png",
    link: "https://www.andierni.ch",
    github: "https://github.com/ajerni/andierni",
  },
  {
    id: 2,
    name: "Wine Cellar - www.mywine.info",
    description: "My wine cellar management system. Fully fledged web app using Next.js, Tailwind CSS, PostgreSQL, FastAPI and Langchain for AI features.",
    preview: "/screenshots/wine-cellar.png",
    link: "https://mywine.info",
    github: "https://github.com/ajerni/mywine",
  },
  {
    id: 3,
    name: "LLM's - Langchain Playground",
    description: "Streamlit app to play around with Langchain (Python) and LLMs (Large Language Models). Ask Andi for password :-).",
    preview: "/screenshots/langchain-streamlit.png",
    link: "https://erni-langchain.streamlit.app/",
    github: "https://github.com/ajerni/erni-langchain",
  },
  {
    id: 4,
    name: "Rust and PostgreSQL",
    description: "PostgreSQL database 💾 application written in Rust 🦀 using the SQLX library and serving it with Actix webserver. Also includes a Bevy Engine 🎮 game.",
    preview: "/screenshots/rust-sqlx.png",
    link: "https://rust-sqlx.onrender.com/htmx",
    github: "https://github.com/ajerni/rust-sqlx",
  },
  {
    id: 5,
    name: "MQTT Dashboard",
    description: "A IoT dashboard for MQTT (Message Queuing Telemetry Transport) messages. Playground for Microcontroller projects.",
    preview: "/screenshots/mqtt-dashboard.png",
    link: "https://mqtt.andierni.tech",
    github: "https://github.com/ajerni/mqtt",
  },
]

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = React.useState(projects[0])

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader className="border-b px-4 py-2">
          <h2 className="text-lg font-semibold">Projects</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.id}>
                    <SidebarMenuButton
                      onClick={() => setSelectedProject(project)}
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
      </Sidebar>
      <SidebarInset className="min-h-screen">
        <main className="flex-1 p-6">
          <Card>
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
              <div className="flex gap-4">
                <Button asChild>
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Project
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
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
  )
}

