import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Users,
  Target,
  Globe2,
  GraduationCap,
  MapPin,
  Calendar,
  UserPlus,
  Medal,
  ScrollText,
  Lightbulb,
  DollarSign,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export const metadata: Metadata = {
  title: "About | Abu Rayhan Biruni International Chemistry Olympiad",
  description:
    "Learn about the Abu Rayhan Biruni International Chemistry Olympiad (ARBICHO), its mission, vision, and commitment to fostering young scientific talent worldwide.",
};



export default function AboutPage() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#011c2c] to-[#012e40]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
          >
            About ARBIChO
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Abu Rayhan Biruni International Chemistry Olympiad
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            A prestigious global competition identifying and nurturing young talents in the field of chemistry
          </p>
        </div>

        {/* Event Details Card */}
        <Card className="mx-auto max-w-3xl mb-16 border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-100">Event Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <h3 className="font-medium text-emerald-100">Date</h3>
                <p className="text-emerald-100/70">June 1-8, 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <h3 className="font-medium text-emerald-100">Location</h3>
                <p className="text-emerald-100/70">Tashkent, Uzbekistan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <h3 className="font-medium text-emerald-100">Participants</h3>
                <p className="text-emerald-100/70">Talented students from various countries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <h3 className="font-medium text-emerald-100">Field</h3>
                <p className="text-emerald-100/70">Chemistry</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto max-w-3xl mb-16 space-y-8">
          <h2 className="text-2xl font-bold text-white text-center">Objectives</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            
            {[
              {
                icon: <Target className="h-8 w-8 text-emerald-400" />,
                title: "Identify & Support",
                description: "Identifying and supporting students with exceptional chemistry skills",
              },
              {
                icon: <Globe2 className="h-8 w-8 text-emerald-400" />,
                title: "Global Platform",
                description: "Providing a global platform for participants to compete and learn from one another",
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-emerald-400" />,
                title: "Scientific Excellence",
                description: "Promoting Uzbekistan as a hub for scientific excellence and education",
              },
              {
                icon: <Users className="h-8 w-8 text-emerald-400" />,
                title: "Collaboration",
                description:
                  "Encouraging collaboration between students, educators, and academic institutions worldwide",
              },
            ].map((objective, index) => (
              <Card key={index} className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {objective.icon}
                    <h3 className="font-medium text-emerald-100">{objective.title}</h3>
                    <p className="text-sm text-emerald-100/70">{objective.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Composition */}
        <div className="mx-auto max-w-3xl mb-16 space-y-8">
          <h2 className="text-2xl font-bold text-white text-center">Team Composition</h2>
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <UserPlus className="h-8 w-8 text-emerald-400" />
                  <div>
                    <h3 className="font-medium text-emerald-100">Delegation Structure</h3>
                    <ul className="mt-2 list-disc pl-5 text-emerald-100/70 space-y-2">
                      <li>4 participants for the competition</li>
                      <li>1 team leader to accompany and support the participants</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Awards & Recognition */}
        <div className="mx-auto max-w-3xl mb-16 space-y-8">
          <h2 className="text-2xl font-bold text-white text-center">Awards & Recognition</h2>
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardContent className="pt-6 space-y-8">
              <p className="text-emerald-100/80">
                ARBICHO follows a well-structured awards system to honor top-performing students based on their final
                scores. The distribution of medals follows a 1:2:3 ratio, ensuring fair recognition of outstanding
                performances.
              </p>

              {/* Medal Categories */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-emerald-100">Medal Categories</h3>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-emerald-900/20">
                    <div className="p-3 rounded-full bg-yellow-500/10">
                      <Medal className="h-6 w-6 text-yellow-500" />
                    </div>
                    <h4 className="font-medium text-yellow-500">Gold Medal</h4>
                    <p className="text-sm text-center text-emerald-100/70">
                      Awarded to students demonstrating outstanding excellence
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-emerald-900/20">
                    <div className="p-3 rounded-full bg-gray-400/10">
                      <Medal className="h-6 w-6 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-gray-400">Silver Medal</h4>
                    <p className="text-sm text-center text-emerald-100/70">
                      Given to participants with high achievements
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-emerald-900/20">
                    <div className="p-3 rounded-full bg-amber-700/10">
                      <Medal className="h-6 w-6 text-amber-700" />
                    </div>
                    <h4 className="font-medium text-amber-700">Bronze Medal</h4>
                    <p className="text-sm text-center text-emerald-100/70">Recognizing commendable performances</p>
                  </div>
                </div>
              </div>

              {/* Additional Awards */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-emerald-100">Additional Awards</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-900/20">
                      <ScrollText className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-100">Certificates & Diplomas</h4>
                      <p className="text-sm text-emerald-100/70">
                        All medalists and distinguished participants receive official certificates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-900/20">
                      <Lightbulb className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-100">Special Awards</h4>
                      <p className="text-sm text-emerald-100/70">
                        Granted for exceptional creativity and innovative problem-solving approaches
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-900/20">
                      <DollarSign className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-100">Monetary Prizes</h4>
                      <p className="text-sm text-emerald-100/70">May be awarded to top-ranking competitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cultural Experience */}
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-2xl font-bold text-white text-center">Cultural Experience</h2>
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/images/samarkand.png" alt="Samarkand" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
            </div>
            <CardContent className="relative pt-6">
              <p className="text-emerald-100/80">
                Participants will have the opportunity to visit Samarkand, experiencing Uzbekistan`s rich cultural
                heritage. This excursion combines scientific excellence with cultural exploration, making ARBIChO a
                truly unique international experience.
              </p>
              <div className="mt-6">
                <Link href='https://uzbekistan.travel/en/i/samarkand/' target="_blank" rel="noopener noreferrer">
                
                <Button
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                >
                  Learn More About Samarkand
                </Button>

                </Link>

              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <p className="text-emerald-100/80 mb-6">Ready to be part of this prestigious international competition?</p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600">Register Now</Button>
            <Button
              variant="outline"
              className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

