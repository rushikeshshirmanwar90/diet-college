import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Video, Download, LinkIcon } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Resources</h1>
        <p className="mt-4 text-xl text-gray-600">Educational resources and materials will be updated soon</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <FileText className="h-6 w-6" />
            </div>
            <CardTitle>Publications</CardTitle>
            <CardDescription>Research Papers and Publications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain research papers, publications, and other academic
              resources produced by DIET Nanded.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <BookOpen className="h-6 w-6" />
            </div>
            <CardTitle>Teaching Materials</CardTitle>
            <CardDescription>Lesson Plans and Teaching Aids</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain lesson plans, teaching aids, and other educational
              materials for teachers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <Video className="h-6 w-6" />
            </div>
            <CardTitle>Video Resources</CardTitle>
            <CardDescription>Educational Videos and Lectures</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain educational videos, recorded lectures, and other
              multimedia resources.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <Download className="h-6 w-6" />
            </div>
            <CardTitle>Downloads</CardTitle>
            <CardDescription>Forms, Templates, and Documents</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain downloadable forms, templates, and other documents
              for students and teachers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
              <LinkIcon className="h-6 w-6" />
            </div>
            <CardTitle>Useful Links</CardTitle>
            <CardDescription>External Resources and References</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Content will be updated soon. This section will contain links to external resources, government websites,
              and other useful references.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 rounded-lg bg-orange-50 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
        <p className="mt-2 text-gray-600">
          We are working on updating this page with a comprehensive collection of educational resources. Please check
          back later for more information.
        </p>
      </div>
    </div>
  )
}
