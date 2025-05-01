import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Lightbulb, LineChart, Compass, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">About Us</h1>
        <p className="mt-4 text-xl text-gray-600">
          Learn more about District Institute of Education and Training, Nanded
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-gray-600">
            District Institute of Education and Training (DIET), Nanded is an important teacher training institute in
            Maharashtra. The institute conducts various training programs, workshops, and innovative initiatives to
            improve the quality of primary education.
          </p>

          <div className="rounded-lg bg-orange-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Address and Contact</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>Address:</strong> DIET, Srinagar, Tarda Naka, Nanded – 431601
              </li>
              <li>
                <strong>Phone:</strong> 02462-2462
              </li>
              <li>
                <strong>Email:</strong> dietnanded@maa.ac.in
              </li>
              <li>
                <strong>Head of the Institute:</strong> Mr. S. S. Chitkulwar (Senior Lecturer)
              </li>
              <li>
                <strong>Mobile:</strong> 9881977425
              </li>
              <li>
                <strong>Official Website:</strong> www.dietnanded.in
              </li>
              <li>
                <strong>YouTube Channel:</strong> @DIETNANDEDlive
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Initiatives and Programs</h2>
            <p className="text-gray-600">DIET Nanded runs various educational programs. One notable initiative is:</p>
            <div className="mt-4 rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900">&quot;Lets Learn Science through Experiments&quot;</h3>
              <p className="mt-2 text-gray-600">
                Under this program, science experiments are conducted every Saturday with participation from around 500
                schools.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Courses and Admission</h2>
            <p className="text-gray-600">
              DIET Nanded primarily offers the D.Ed (Diploma in Education) course, which is essential for teacher
              training. For more details, please visit the institutes official website.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg">
            <Image src="/images/logo.png" alt="DIET Nanded Logo" width={400} height={400} className="mx-auto" />
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Additional Information</h2>
            <p className="text-gray-600">
              DIET Nanded functions under the Maharashtra State Council of Educational Research and Training (MSCERT).
              Its main objectives are teacher training, educational research, and quality improvement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Teacher Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To provide high-quality training to prepare efficient primary and secondary school teachers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <BookOpen className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Educational Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To conduct research on educational materials, teaching methods, and policies based on local needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To develop and implement educational innovations and creative practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <LineChart className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To observe and assess the teaching-learning process in schools for quality improvement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <Compass className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Support & Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To provide educational support and guidance to all schools in the district.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To enhance teachers professional skills through workshops, training camps, and other programs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <Heart className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Inclusive Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To provide educational facilities for children with special needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="rounded-full bg-orange-100 p-2 w-fit text-orange-600 mb-2">
                  <Globe className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">Educational Schemes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  To implement national educational schemes such as SSA, RMSA, and Samagra Shiksha.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
