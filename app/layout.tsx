import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"


export const metadata: Metadata = {
  title: "DIET Nanded - District Institute of Education and Training",
  description: "Official website of District Institute of Education and Training, Nanded",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
