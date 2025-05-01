import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="DIET Nanded Logo"
                width={50}
                height={50}
                className="rounded-full bg-white p-1"
              />
              <div>
                <h3 className="text-lg font-bold">DIET Nanded</h3>
                <p className="text-xs text-gray-400">District Institute of Education & Training</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering educators through quality training, research, and innovation
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:dietnanded@maa.ac.in" className="text-gray-400 hover:text-white">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  D.Ed Program
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  Teacher Training
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  Science Experiments
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">DIET, Srinagar, Tarda Naka, Nanded – 431601</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">02462-2462</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">dietnanded@maa.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} District Institute of Education and Training, Nanded. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
