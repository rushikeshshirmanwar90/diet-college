"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">
          Get in touch with District Institute of Education and Training, Nanded
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us using the following contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm text-gray-600">DIET, Srinagar, Tarda Naka, Nanded – 431601</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-gray-600">02462-2462</p>
                  <p className="text-sm text-gray-600">Mobile: 9881977425 (Mr. S. S. Chitkulwar)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-600">dietnanded@maa.ac.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Website</h3>
                  <p className="text-sm text-gray-600">www.dietnanded.in</p>
                  <p className="text-sm text-gray-600">YouTube: @DIETNANDEDlive</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 rounded-lg bg-gray-100 p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Office Hours</h2>
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

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below to get in touch with us</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Location Map</h2>
        <div className="w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4328214730253!2d77.30356907525285!3d19.176288982049076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d68ba38cd721%3A0x40df43712f78a26f!2sDistrict%20Institute%20of%20Education%20%26%20Training!5e0!3m2!1sen!2sin!4v1746089189790!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}