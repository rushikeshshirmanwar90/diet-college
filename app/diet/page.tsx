import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from "lucide-react"

const dietLocations = [
  { id: "ahilyanagar", name: "Ahilyanagar", region: "Marathwada" },
  { id: "akola", name: "Akola", region: "Vidarbha" },
  { id: "amravati", name: "Amravati", region: "Vidarbha" },
  { id: "sambhajinagar", name: "Chhatrapati Sambhajinagar", region: "Marathwada" },
  { id: "beed", name: "Beed", region: "Marathwada" },
  { id: "bhandara", name: "Bhandara", region: "Vidarbha" },
  { id: "buldhana", name: "Buldhana", region: "Vidarbha" },
  { id: "chandrapur", name: "Chandrapur", region: "Vidarbha" },
  { id: "dharashiva", name: "Dharashiva", region: "Marathwada" },
  { id: "dhule", name: "Dhule", region: "North Maharashtra" },
  { id: "gadchiroli", name: "Gadchiroli", region: "Vidarbha" },
  { id: "gondia", name: "Gondia", region: "Vidarbha" },
  { id: "hingoli", name: "Hingoli", region: "Marathwada" },
  { id: "jalgaon", name: "Jalgaon", region: "North Maharashtra" },
  { id: "jalna", name: "Jalna", region: "Marathwada" },
  { id: "kolhapur", name: "Kolhapur", region: "Western Maharashtra" },
  { id: "latur", name: "Latur", region: "Marathwada" },
  { id: "nagpur", name: "Nagpur", region: "Vidarbha" },
  { id: "nanded", name: "Nanded", region: "Marathwada" },
  { id: "nandurbar", name: "Nandurbar", region: "North Maharashtra" },
  { id: "nashik", name: "Nashik", region: "North Maharashtra" },
  { id: "palghar", name: "Palghar", region: "Konkan" },
  { id: "parbhani", name: "Parbhani", region: "Marathwada" },
  { id: "pune", name: "Pune", region: "Western Maharashtra" },
  { id: "raigad", name: "Raigad", region: "Konkan" },
  { id: "ratnagiri", name: "Ratnagiri", region: "Konkan" },
  { id: "sangli", name: "Sangli", region: "Western Maharashtra" },
  { id: "satara", name: "Satara", region: "Western Maharashtra" },
  { id: "sindhudurg", name: "Sindhudurg", region: "Konkan" },
  { id: "solapur", name: "Solapur", region: "Western Maharashtra" },
  { id: "thane", name: "Thane", region: "Konkan" },
  { id: "wardha", name: "Wardha", region: "Vidarbha" },
  { id: "washim", name: "Washim", region: "Vidarbha" },
  { id: "yavatmal", name: "Yavatmal", region: "Vidarbha" },
]

// Group locations by region
const regionGroups = dietLocations.reduce(
  (groups, location) => {
    const { region } = location
    if (!groups[region]) {
      groups[region] = []
    }
    groups[region].push(location)
    return groups
  },
  {} as Record<string, typeof dietLocations>,
)

const regions = Object.keys(regionGroups).sort()

export default function DIETPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">DIET Locations</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore District Institutes of Education and Training across Maharashtra
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {regions.map((region) => (
            <TabsTrigger key={region} value={region}>
              {region}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">About DIET</h2>
              <p className="text-gray-600 mb-4">
                District Institutes of Education and Training (DIETs) are educational institutions established across
                various districts in Maharashtra. These institutes play a crucial role in teacher training, educational
                research, and quality improvement in primary education.
              </p>
              <p className="text-gray-600 mb-4">
                Each DIET works under the Maharashtra State Council of Educational Research and Training (MSCERT) and
                focuses on the specific educational needs of its district while following state guidelines.
              </p>
              <h3 className="text-xl font-semibold mb-2">Key Functions</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Pre-service and in-service teacher training</li>
                <li>Educational research and development</li>
                <li>Curriculum development and implementation</li>
                <li>Educational technology support</li>
                <li>Guidance and counseling</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">DIET Locations by Region</h2>
              <div className="space-y-4">
                {regions.map((region) => (
                  <div key={region}>
                    <h3 className="text-lg font-semibold text-orange-600">{region}</h3>
                    <ul className="grid grid-cols-2 gap-2 mt-2">
                      {regionGroups[region].map((location) => (
                        <li key={location.id}>
                          <Link
                            href={`/diet/${location.id}`}
                            className="text-gray-600 hover:text-orange-600 hover:underline"
                          >
                            {location.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {regions.map((region) => (
          <TabsContent key={region} value={region} className="mt-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">{region} Region DIETs</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regionGroups[region].map((location) => (
                  <Card key={location.id}>
                    <CardHeader className="pb-3">
                      <div className="mb-2 w-fit rounded-full bg-orange-100 p-2 text-orange-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <CardTitle>{location.name}</CardTitle>
                      <CardDescription>{region} Region</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Content will be updated soon. This section will contain information about DIET {location.name}.
                      </p>
                      <Link
                        href={`/diet/${location.id}`}
                        className="text-orange-600 hover:underline inline-flex items-center"
                      >
                        View details
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
