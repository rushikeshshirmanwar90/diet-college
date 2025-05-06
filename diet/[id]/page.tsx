import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const dietLocations = [
  {
    id: "ahilyanagar",
    name: "Ahilyanagar",
    region: "Marathwada",
    address: "DIET Ahilyanagar, Maharashtra",
    phone: "02462-XXXXX",
    email: "dietahilyanagar@maa.ac.in",
  },
  {
    id: "akola",
    name: "Akola",
    region: "Vidarbha",
    address: "DIET Akola, Maharashtra",
    phone: "02462-XXXXX",
    email: "dietakola@maa.ac.in",
  },
  {
    id: "nanded",
    name: "Nanded",
    region: "Marathwada",
    address: "DIET, Srinagar, Tarda Naka, Nanded – 431601",
    phone: "02462-2462",
    email: "dietnanded@maa.ac.in",
  },
  // Add more locations as needed
]

export default function DIETLocationPage({ params }: { params: { id: string } }) {
  const location = dietLocations.find((loc) => loc.id === params.id) || {
    id: params.id,
    name: params.id.charAt(0).toUpperCase() + params.id.slice(1),
    region: "Maharashtra",
    address: `DIET ${params.id.charAt(0).toUpperCase() + params.id.slice(1)}, Maharashtra`,
    phone: "02462-XXXXX",
    email: `diet${params.id}@maa.ac.in`,
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12">
        <Link href="/diet" className="text-orange-600 hover:underline mb-4 inline-block">
          ← Back to DIET Locations
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">DIET {location.name}</h1>
        <p className="mt-4 text-xl text-gray-600">District Institute of Education and Training, {location.name}</p>
      </div>

      <Alert className="mb-8 bg-orange-50 border-orange-200">
        <AlertTriangle className="h-5 w-5 text-orange-600" />
        <AlertTitle className="text-orange-600">Information Notice</AlertTitle>
        <AlertDescription>
          Detailed information about DIET {location.name} will be updated soon. Please check back later.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>About DIET {location.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Content will be updated soon. This section will contain detailed information about DIET{" "}
                    {location.name}, including its history, mission, vision, and achievements.
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Key Functions</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Pre-service and in-service teacher training</li>
                      <li>Educational research and development</li>
                      <li>Curriculum development and implementation</li>
                      <li>Educational technology support</li>
                      <li>Guidance and counseling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-gray-600">{location.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-gray-600">{location.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-600">Map will be embedded here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faculty" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Faculty Members</CardTitle>
              <CardDescription>Meet the faculty members of DIET {location.name}</CardDescription>
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
              <CardTitle>Programs and Courses</CardTitle>
              <CardDescription>Explore the programs and courses offered by DIET {location.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-600">Content will be updated soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="facilities" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Facilities</CardTitle>
              <CardDescription>Learn about the facilities available at DIET {location.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-600">Content will be updated soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Get in touch with DIET {location.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-sm text-gray-600">{location.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-sm text-gray-600">{location.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                    </li>
                    <li>
                      <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                    </li>
                    <li>
                      <strong>Sunday:</strong> Closed
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
