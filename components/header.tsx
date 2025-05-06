"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const departments = [
  { name: "Human Resource (HRD)", href: "/departments/hrd" },
  { name: "Coordination", href: "/departments/coordination" },
  { name: "IT and Media", href: "/departments/it-media" },
  { name: "Language", href: "/departments/language" },
  { name: "Social Sciences Arts and Sports", href: "/departments/social-sciences" },
  { name: "Pre-service education, early childhood education, psychology", href: "/departments/pre-service" },
  { name: "Equality", href: "/departments/equality" },
  { name: "International Quality Room", href: "/departments/quality" },
]

const dietLocations = [
  { name: "Ahilyanagar", href: "/diet/ahilyanagar" },
  { name: "Akola", href: "/diet/akola" },
  { name: "Amravati", href: "/diet/amravati" },
  { name: "Chhatrapati Sambhajinagar", href: "/diet/sambhajinagar" },
  { name: "Beed", href: "/diet/beed" },
  { name: "Bhandara", href: "/diet/bhandara" },
  { name: "Buldhana", href: "/diet/buldhana" },
  { name: "Chandrapur", href: "/diet/chandrapur" },
  { name: "Dharashiva", href: "/diet/dharashiva" },
  { name: "Dhule", href: "/diet/dhule" },
  { name: "Gadchiroli", href: "/diet/gadchiroli" },
  { name: "Gondia", href: "/diet/gondia" },
  { name: "Hingoli", href: "/diet/hingoli" },
  { name: "Jalgaon", href: "/diet/jalgaon" },
  { name: "Jalna", href: "/diet/jalna" },
  { name: "Kolhapur", href: "/diet/kolhapur" },
  { name: "Latur", href: "/diet/latur" },
  { name: "Nagpur", href: "/diet/nagpur" },
  { name: "Nanded", href: "/diet/nanded" },
  { name: "Nandurbar", href: "/diet/nandurbar" },
  { name: "Nashik", href: "/diet/nashik" },
  { name: "Palghar", href: "/diet/palghar" },
  { name: "Parbhani", href: "/diet/parbhani" },
  { name: "Pune", href: "/diet/pune" },
  { name: "Raigad", href: "/diet/raigad" },
  { name: "Ratnagiri", href: "/diet/ratnagiri" },
  { name: "Sangli", href: "/diet/sangli" },
  { name: "Satara", href: "/diet/satara" },
  { name: "Sindhudurg", href: "/diet/sindhudurg" },
  { name: "Solapur", href: "/diet/solapur" },
  { name: "Thane", href: "/diet/thane" },
  { name: "Wardha", href: "/diet/wardha" },
  { name: "Washim", href: "/diet/washim" },
  { name: "Yavatmal", href: "/diet/yavatmal" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Departments", href: "/departments", dropdown: departments },
  { name: "DIET", href: "/diet", dropdown: dietLocations },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Top bar with social links */}
      <div className="bg-orange-600 py-2 text-white">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="text-sm">
            <span className="hidden md:inline">Welcome to DIET Nanded</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-orange-200">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-orange-200">
              <span className="sr-only">YouTube</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center gap-2 p-1.5">
            <Image src="/images/logo.png" alt="DIET Nanded Logo" width={50} height={50} />
            <div>
              <div className="text-lg font-bold text-gray-900">DIET Nanded</div>
              <div className="text-xs text-gray-600">District Institute of Education & Training</div>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-m-2.5 p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs overflow-y-auto">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="-m-1.5 flex items-center gap-2 p-1.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image src="/images/logo.png" alt="DIET Nanded Logo" width={40} height={40} />
                  <div className="text-lg font-bold">DIET Nanded</div>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) =>
                      item.dropdown ? (
                        <Accordion type="single" collapsible key={item.name}>
                          <AccordionItem value={item.name} className="border-none">
                            <AccordionTrigger className="py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              {item.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="ml-4 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block py-2 px-3 text-sm text-gray-600 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex lg:gap-x-4">
          {navigation.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 max-h-[70vh] overflow-y-auto">
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link href={subItem.href} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600 px-3 py-2"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
