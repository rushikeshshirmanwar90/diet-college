import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, GraduationCap, Users } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Programs & Courses</h1>
        <p className="mt-4 text-xl text-gray-600">
          Information about our educational programs and courses will be updated soon
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <GraduationCap className="h-6 w-6" />
            </div>
            <CardTitle>D.Ed Program</CardTitle>
            <CardDescription>Diploma in Education</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain information about the D.Ed program, admission
              process, curriculum, and more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <Calendar className="h-6 w-6" />
            </div>
            <CardTitle>Workshops & Training</CardTitle>
            <CardDescription>Professional Development Programs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain information about upcoming workshops, training
              sessions, and professional development programs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <BookOpen className="h-6 w-6" />
            </div>
            <CardTitle>Science Experiments</CardTitle>
            <CardDescription>Let Learn Science through Experiments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain information about our science experiment program,
              including schedules, participating schools, and achievements.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <Users className="h-6 w-6" />
            </div>
            <CardTitle>Inclusive Education</CardTitle>
            <CardDescription>Education for All</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain information about our inclusive education
              initiatives, resources, and support systems.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 rounded-lg bg-orange-50 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
        <p className="mt-2 text-gray-600">
          We are working on updating this page with detailed information about all our programs and courses. Please
          check back later for more information.
        </p>
      </div>
    </div>
  )
}
