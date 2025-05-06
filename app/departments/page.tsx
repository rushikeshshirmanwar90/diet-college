import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Laptop, Languages, Music, GraduationCap, HeartHandshake, Award } from "lucide-react"

const departments = [
  {
    id: "hrd",
    name: "Human Resource (HRD)",
    icon: Users,
    description: "Responsible for teacher training and professional development programs.",
  },
  {
    id: "coordination",
    name: "Coordination",
    icon: HeartHandshake,
    description: "Coordinates activities between different departments and external organizations.",
  },
  {
    id: "it-media",
    name: "IT and Media",
    icon: Laptop,
    description: "Manages technology infrastructure and media production for educational purposes.",
  },
  {
    id: "language",
    name: "Language",
    icon: Languages,
    description: "Focuses on language education and teaching methodologies.",
  },
  {
    id: "social-sciences",
    name: "Social Sciences Arts and Sports",
    icon: Music,
    description: "Covers social sciences, arts education, and sports activities.",
  },
  {
    id: "pre-service",
    name: "Pre-service education, early childhood education, psychology",
    icon: GraduationCap,
    description: "Focuses on teacher preparation, early childhood education, and educational psychology.",
  },
  {
    id: "equality",
    name: "Equality",
    icon: HeartHandshake,
    description: "Promotes inclusive education and equal opportunities for all students.",
  },
  {
    id: "quality",
    name: "International Quality Room",
    icon: Award,
    description: "Maintains standards and quality assurance in line with international benchmarks.",
  },
]

export default function DepartmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Departments</h1>
        <p className="mt-4 text-xl text-gray-600">Explore the various departments at DIET Nanded</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {departments.map((dept) => (
            <TabsTrigger key={dept.id} value={dept.id}>
              {dept.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <Card key={dept.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
                    <dept.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <Link
                    href={`/departments/${dept.id}`}
                    className="text-orange-600 hover:underline inline-flex items-center"
                  >
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {departments.map((dept) => (
          <TabsContent key={dept.id} value={dept.id} className="mt-6">
            <Card>
              <CardHeader>
                <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
                  <dept.icon className="h-6 w-6" />
                </div>
                <CardTitle>{dept.name}</CardTitle>
                <CardDescription>Detailed information about the {dept.name} department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">About the Department</h3>
                    <p className="text-gray-600">
                      Content will be updated soon. This section will contain detailed information about the {dept.name}{" "}
                      department, including its objectives, activities, and achievements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Key Responsibilities</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Content will be updated soon</li>
                      <li>Content will be updated soon</li>
                      <li>Content will be updated soon</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Faculty</h3>
                    <p className="text-gray-600">
                      Content will be updated soon. This section will contain information about the faculty members of
                      the {dept.name} department.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Programs and Activities</h3>
                    <p className="text-gray-600">
                      Content will be updated soon. This section will contain information about the programs and
                      activities conducted by the {dept.name} department.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
