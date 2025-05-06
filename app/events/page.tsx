"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Play } from "lucide-react"

// Sample event data
const events = [
  {
    id: "event1",
    title: "Annual Science Exhibition",
    date: "June 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "DIET Nanded Campus",
    description:
      "Showcasing innovative science projects from schools across the district. The exhibition will feature experiments, models, and demonstrations by students.",
    category: "exhibition",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: "event2",
    title: "Teacher Training Workshop",
    date: "July 10-12, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "DIET Nanded Conference Hall",
    description:
      "Three-day intensive workshop on innovative teaching methodologies for primary school teachers. The workshop will cover modern pedagogical approaches, classroom management, and use of technology in education.",
    category: "workshop",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: "event3",
    title: "Educational Conference",
    date: "August 5, 2025",
    time: "9:30 AM - 3:30 PM",
    location: "Nanded City Hall",
    description:
      "Annual educational conference bringing together educators, researchers, and policymakers to discuss current trends and challenges in education. The conference will feature keynote speeches, panel discussions, and networking opportunities.",
    category: "conference",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "https://www.youtube.com/watch?v=example3",
  },
  {
    id: "event4",
    title: "Cultural Festival",
    date: "September 20, 2025",
    time: "11:00 AM - 7:00 PM",
    location: "DIET Nanded Auditorium",
    description:
      "A celebration of cultural diversity featuring performances, exhibitions, and activities by students from various schools. The festival will showcase traditional dances, music, art, and cuisine from different regions of Maharashtra.",
    category: "cultural",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "https://www.youtube.com/watch?v=example4",
  },
  {
    id: "event5",
    title: "Sports Meet",
    date: "October 10-12, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "District Sports Complex",
    description:
      "Annual inter-school sports competition featuring various athletic events, team sports, and games. The meet aims to promote physical fitness, sportsmanship, and healthy competition among students.",
    category: "sports",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "https://www.youtube.com/watch?v=example5",
  },
  {
    id: "event6",
    title: "Educational Technology Expo",
    date: "November 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "DIET Nanded IT Center",
    description:
      "Exhibition showcasing the latest educational technologies, digital learning tools, and innovative teaching aids. The expo will include demonstrations, workshops, and opportunities to try out various educational software and hardware.",
    category: "exhibition",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    videoUrl: "https://www.youtube.com/watch?v=example6",
  },
]

// Group events by category
const categories = ["all", ...Array.from(new Set(events.map((event) => event.category)))]

function EventCard({ event }: { event: (typeof events)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] w-full">
        <div className="absolute inset-0">
          <Image
            src={event.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${event.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />
        </div>
        {event.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {event.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-orange-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-orange-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-orange-600" />
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={event.videoUrl} target="_blank" className="flex items-center justify-center gap-2">
            <Play className="h-4 w-4" />
            Watch Video
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredEvents = activeCategory === "all" ? events : events.filter((event) => event.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Events</h1>
        <p className="mt-4 text-xl text-gray-600">Discover upcoming and past events at DIET Nanded</p>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory} className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg bg-orange-50 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Stay Updated</h2>
        <p className="mt-2 text-gray-600">
          Subscribe to our newsletter to receive updates about upcoming events and activities.
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/contact">Subscribe Now</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
