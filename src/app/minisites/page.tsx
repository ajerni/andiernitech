"use client"

import * as React from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// Add minisites data here
const minisites = [
  {
    id: 1,
    title: "Websim AI Demo",
    description: "7 amazing mini apps created with websim.ai. MUST check it out!",
    image: "/minisites/websim.png",
    link: "https://websim.andierni.ch"
  },
  {
    id: 2,
    title: "Coronicalc", 
    description: "Primary school maths teacher app made with Flutter during Corona times.",
    image: "/minisites/coronicalc.png",
    link: "https://coronicalc.andierni.ch"
  },
  {
    id: 3,
    title: "Guitar Selector Cube", 
    description: "3D cube helping you to select which guitar to play. By the way teaching 3D and HUD display.",
    image: "/minisites/cube.png",
    link: "https://cube.andierni.ch"
  },
  {
    id: 4,
    title: "Gatsby Playground", 
    description: "Some experiments with Gatsby. JAM-stack playground.",
    image: "/minisites/gatsby.png",
    link: "https://gatsby.andierni.ch"
  },
  {
    id: 5,
    title: "PDO - PHP Data Objects", 
    description: "CRUD database operations with PHP and mySQL.",
    image: "/minisites/pdo.png",
    link: "https://pdo.andierni.ch"
  },
  {
    id: 6,
    title: "Internet of Things", 
    description: "IoT experiments with Particle microcontrollers programmed with C++.",
    image: "/minisites/iot.png",
    link: "https://iot.andierni.ch"
  },
  {
    id: 7,
    title: "Ionic", 
    description: "Some mobile experiments with Ionic.",
    image: "/minisites/ionic.png",
    link: "https://ionic.andierni.ch"
  },
  {
    id: 8,
    title: "Hampelma", 
    description: "Simple sprite animation test. Beautyful handpainting :-)",
    image: "/minisites/hampelma.png",
    link: "https://hampelma.andierni.ch"
  },
  {
    id: 9,
    title: "ZIM Playground", 
    description: "Some tests with the amazing Canvas Framework ZIM.",
    image: "/minisites/playground.png",
    link: "https://playground.andierni.ch"
  },
  {
    id: 10,
    title: "AI Quiz Generator", 
    description: "Interesting tech stack: Three.js, Langchain, Redis, Docker, FastAPI, OpenAI...",
    image: "/minisites/quiz.png",
    link: "https://guiz.andierni.ch"
  },
  {
    id: 11,
    title: "Dweet Demo - Status Changer", 
    description: "Simple demo of Dweet.io. Change the status with a Dweet from anywhere in the world.",
    image: "/minisites/status.png",
    link: "https://status.andierni.ch"
  },
  {
    id: 12,
    title: "VR Test", 
    description: "Ultra simple first step to VR view.",
    image: "/minisites/vrtest.png",
    link: "https://vrtest.andierni.ch"
  },
  {
    id: 13,
    title: "ZIM and Vue", 
    description: "Integration test of ZIM and Vue.",
    image: "/minisites/zimvue.png",
    link: "https://zimvue.andierni.ch"
  },
  {
    id: 14,
    title: "AlpineJS",
    description: "TailwindCSS, AlpineJS and PHP. Playground TAP stack.",
    image: "/minisites/alpine.png",
    link: "https://alpine.andierni.ch"
  },
]

export default function Minisites() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Mini-sites and tests</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {minisites.map((site) => (
            <Card 
              key={site.id} 
              className="overflow-hidden group cursor-pointer transition-all hover:ring-2 hover:ring-primary"
              onClick={() => window.open(site.link, '_blank')}
            >
              <div className="h-48 overflow-hidden relative m-4">
                <img
                  src={site.image}
                  alt={site.title}
                  className="h-full w-full object-contain bg-gray-100"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-black drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{site.title}</CardTitle>
                <CardDescription>{site.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 