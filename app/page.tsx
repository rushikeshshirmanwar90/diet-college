import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Users, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-400 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  District Institute of Education & Training
                </h1>
                <h2 className="text-xl font-semibold text-white md:text-2xl">Nanded, Maharashtra</h2>
                <p className="max-w-[600px] text-white md:text-xl">
                  Empowering educators through quality training, research, and innovation
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[250px] w-[250px] md:h-[350px] md:w-[350px]">
                <Image src="/images/logo.png" alt="DIET Nanded Logo" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About DIET Nanded</h2>
            <p className="text-gray-600">
              District Institute of Education and Training (DIET), Nanded is an important teacher training institute in
              Maharashtra. The institute conducts various training programs, workshops, and innovative initiatives to
              improve the quality of primary education.
            </p>
            <Button asChild variant="link" className="p-0 text-orange-600">
              <Link href="/about" className="flex items-center gap-1">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Key Objectives</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-1 text-orange-600">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span>Pre-service and in-service teacher training</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-1 text-orange-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span>Educational research and development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-1 text-orange-600">
                  <Users className="h-5 w-5" />
                </div>
                <span>Promotion of inclusive education</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Departments</h2>
            <p className="mt-2 text-gray-600">Explore the various departments at DIET Nanded</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Human Resource (HRD)</CardTitle>
                <CardDescription>Teacher training and professional development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Responsible for teacher training and professional development programs to enhance teaching skills.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-orange-600">
                  <Link href="/departments/hrd" className="flex items-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>IT and Media</CardTitle>
                <CardDescription>Technology integration in education</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manages technology infrastructure and media production for educational purposes.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-orange-600">
                  <Link href="/departments/it-media" className="flex items-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Social Sciences Arts and Sports</CardTitle>
                <CardDescription>Holistic educational development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Covers social sciences, arts education, and sports activities for comprehensive development.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-orange-600">
                  <Link href="/departments/social-sciences" className="flex items-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/departments">View All Departments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Upcoming Events</h2>
          <p className="mt-2 text-gray-600">Stay informed about our latest activities and events</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Event ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Annual Science Exhibition</CardTitle>
                <CardDescription className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-orange-600" />
                    <span>June 15, 2025</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Showcasing innovative science projects from schools across the district.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-orange-600">
                  <Link href="/events" className="flex items-center gap-1">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-orange-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Quick Links</h2>
            <p className="mt-2 text-gray-600">Access important resources and information</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { title: "Annual Report", icon: FileText, href: "#" },
              { title: "Teacher Diploma Admission", icon: GraduationCap, href: "#" },
              { title: "School Quality Assessment", icon: BookOpen, href: "#" },
              { title: "Government Portals", icon: Users, href: "#" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center gap-3 rounded-lg border border-orange-200 bg-white p-4 transition-colors hover:bg-orange-100"
              >
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <link.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-gray-900">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
