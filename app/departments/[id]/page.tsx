import { notFound } from "next/navigation"
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
    longDescription:
      "The Human Resource Development department at DIET Nanded focuses on enhancing the professional capabilities of teachers through various training programs, workshops, and development initiatives. The department works to ensure that teachers are equipped with the latest teaching methodologies and skills required for effective classroom instruction.",
  },
  {
    id: "coordination",
    name: "Coordination",
    icon: HeartHandshake,
    description: "Coordinates activities between different departments and external organizations.",
    longDescription:
      "The Coordination department serves as a bridge between various departments within DIET Nanded and external educational organizations. It ensures smooth communication, collaboration, and implementation of joint initiatives and programs across different educational entities in the district.",
  },
  {
    id: "it-media",
    name: "IT and Media",
    icon: Laptop,
    description: "Manages technology infrastructure and media production for educational purposes.",
    longDescription:
      "The IT and Media department is responsible for integrating technology into education and teacher training. It manages the institute's technology infrastructure, develops educational media content, and trains teachers in using digital tools and resources for effective teaching and learning.",
  },
  {
    id: "language",
    name: "Language",
    icon: Languages,
    description: "Focuses on language education and teaching methodologies.",
    longDescription:
      "The Language department specializes in language education, focusing on effective teaching methodologies for language instruction. It develops curriculum and teaching materials for language education, conducts research on language acquisition, and provides training to language teachers.",
  },
  {
    id: "social-sciences",
    name: "Social Sciences Arts and Sports",
    icon: Music,
    description: "Covers social sciences, arts education, and sports activities.",
    longDescription:
      "This department encompasses a wide range of subjects including social sciences, arts education, and sports activities. It develops curriculum and teaching methodologies for these subjects, organizes cultural and sports events, and promotes holistic education that includes academic, artistic, and physical development.",
  },
  {
    id: "pre-service",
    name: "Pre-service education, early childhood education, psychology",
    icon: GraduationCap,
    description: "Focuses on teacher preparation, early childhood education, and educational psychology.",
    longDescription:
      "This comprehensive department covers three key areas: pre-service teacher education, early childhood education, and educational psychology. It prepares new teachers for their roles, develops early childhood education programs, and applies psychological principles to enhance teaching and learning processes.",
  },
  {
    id: "equality",
    name: "Equality",
    icon: HeartHandshake,
    description: "Promotes inclusive education and equal opportunities for all students.",
    longDescription:
      "The Equality department is dedicated to promoting inclusive education and ensuring equal educational opportunities for all students regardless of their background, abilities, or circumstances. It develops inclusive teaching strategies, creates accessible learning materials, and advocates for educational equity.",
  },
  {
    id: "quality",
    name: "International Quality Room",
    icon: Award,
    description: "Maintains standards and quality assurance in line with international benchmarks.",
    longDescription:
      "The International Quality Room focuses on maintaining high educational standards and quality assurance in line with international benchmarks. It monitors and evaluates educational programs, implements quality improvement measures, and ensures that DIET Nanded's practices meet global standards of excellence in education.",
  },
]

// Add proper type definition for the props
type PageParams = {
  id: string;
}

type Props = {
  params: PageParams;
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function DepartmentPage({ params }: Props) {
  const department = departments.find((dept) => dept.id === params.id)

  if (!department) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12">
        <Link href="/departments" className="text-orange-600 hover:underline mb-4 inline-block">
          ← Back to Departments
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{department.name}</h1>
        <p className="mt-4 text-xl text-gray-600">{department.description}</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
                    <department.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>About the Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{department.longDescription}</p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Key Responsibilities</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Content will be updated soon</li>
                      <li>Content will be updated soon</li>
                      <li>Content will be updated soon</li>
                      <li>Content will be updated soon</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Department Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-100 p-4">
                      <h3 className="font-semibold">Vision</h3>
                      <p className="text-gray-600">Content will be updated soon</p>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-4">
                      <h3 className="font-semibold">Mission</h3>
                      <p className="text-gray-600">Content will be updated soon</p>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-4">
                      <h3 className="font-semibold">Achievements</h3>
                      <p className="text-gray-600">Content will be updated soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faculty" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Faculty Members</CardTitle>
              <CardDescription>Meet the faculty members of the {department.name} department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-600">Content will be updated soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Programs and Activities</CardTitle>
              <CardDescription>
                Explore the programs and activities conducted by the {department.name} department
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-600">Content will be updated soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Access resources provided by the {department.name} department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-600">Content will be updated soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}