"use client"

import * as React from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// Add games data here
const minisites = [
  {
    id: 1,
    title: "Coin Collector",
    description: "Funny game with highscore system made with ZIM.",
    image: "/minisites/coin.png",
    link: "https://coin.andierni.ch"
  },
  {
    id: 2,
    title: "Fussball", 
    description: "Das Fussballspiel für 2 Spieler am selben Gerät!",
    image: "/minisites/fussball.png",
    link: "https://fussball.andierni.ch"
  },
  {
    id: 3,
    title: "Hamster zählen", 
    description: "My first game with createjs. A simple counting game for kids.",
    image: "/minisites/hamster.png",
    link: "https://hamster.andierni.ch"
  },
  {
    id: 4,
    title: "Hasen Game", 
    description: "Feed the rabbit with carrots and avoid darknes.",
    image: "/minisites/hase.png",
    link: "https://hase.andierni.ch"
  },
  {
    id: 5,
    title: "Bricks", 
    description: "The classic brick game. Implemented with createjs.",
    image: "/minisites/bricks.png",
    link: "https://bricks.andierni.ch"
  },
  {
    id: 6,
    title: "Pet Simulator", 
    description: "Keep the pet happy!",
    image: "/minisites/pet.png",
    link: "https://pet.andierni.ch"
  },
  {
    id: 7,
    title: "Pokemon Zufallsgenerator", 
    description: "Gets you a random pokemon.",
    image: "/minisites/pokemon.png",
    link: "https://pokemon.andierni.ch"
  },
  {
    id: 8,
    title: "Space Invaders", 
    description: "Interesting exploration of ECS Entity Component System with Bevy game engine. Rust learning project.",
    image: "/minisites/spaceship.png",
    link: "https://spaceship.andierni.ch"
  },
  {
    id: 9,
    title: "Snail Race", 
    description: "2 player snail race! One of my first games ever :-)",
    image: "/minisites/race.png",
    link: "https://race.andierni.ch"
  },
  {
    id: 10,
    title: "3 ball crossing", 
    description: "Simple game idea with 3 balls - with collision detection.",
    image: "/minisites/ball.png",
    link: "https://ball.andierni.ch"
  },
  {
    id: 11,
    title: "Mäuse fangen!", 
    description: "Catch the mice and check out the highscore implementation with PHP and mySQL!",
    image: "/minisites/maus.png",
    link: "https://maus.andierni.ch"
  },
  {
    id: 12,
    title: "Penalty", 
    description: "Random penalty shooter game. Programmed wit Claude 3.5 Sonnet in 5 minutes :-) Amazing times!",
    image: "/minisites/penalty.png",
    link: "https://penalty.andierni.tech"
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
          <h1 className="text-2xl font-bold">Games</h1>
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