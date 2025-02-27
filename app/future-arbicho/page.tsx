"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  GraduationCap,
  FileText,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Future competition data
const upcomingCompetitions = [
  {
    year: "2025",
    location: "Tashkent, Uzbekistan",
    dates: "June 1-8, 2025",
    registrationDeadline: "February 15, 2025",
    theme: "Sustainable Chemistry for a Better Future",
    eligibility: [
      "Students born after January 1, 2006",
      "Currently enrolled in secondary education",
      "Not enrolled in university-level courses",
      "Maximum of 4 students per country",
    ],
    keyDates: [
      {
        date: "January 15, 2025",
        event: "Registration Opens",
        status: "upcoming",
      },
      {
        date: "February 15, 2025",
        event: "Registration Deadline",
        status: "upcoming",
      },
      {
        date: "March 15, 2025",
        event: "Local Round Examinations",
        status: "upcoming",
      },
      { date: "April 20, 2025", event: "National Round", status: "upcoming" },
      { date: "June 1, 2025", event: "Opening Ceremony", status: "upcoming" },
      {
        date: "June 2-5, 2025",
        event: "Competition Rounds",
        status: "upcoming",
      },
      { date: "June 6-7, 2025", event: "Cultural Program", status: "upcoming" },
      {
        date: "June 8, 2025",
        event: "Closing Ceremony & Awards",
        status: "upcoming",
      },
    ],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
  {
    year: "2026",
    location: "Baku, Azerbaijan (Tentative)",
    dates: "May 2026 (Exact dates TBA)",
    registrationDeadline: "February 2026",
    theme: "Chemistry at the Crossroads of Innovation",
    eligibility: [
      "Students born after January 1, 2007",
      "Currently enrolled in secondary education",
      "Not enrolled in university-level courses",
      "Maximum of 4 students per country",
    ],
    keyDates: [
      { date: "January 2026", event: "Registration Opens", status: "future" },
      {
        date: "February 2026",
        event: "Registration Deadline",
        status: "future",
      },
      {
        date: "March 2026",
        event: "Local Round Examinations",
        status: "future",
      },
      { date: "April 2026", event: "National Round", status: "future" },
      {
        date: "May 2026",
        event: "International Final Round",
        status: "future",
      },
    ],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
];

export default function FutureARBIChOPage() {
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
            Upcoming Competitions
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Future ARBIChO Competitions
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Discover upcoming ARBIChO events and prepare for the next generation
            of chemistry excellence
          </p>
        </div>

        {/* Featured Competition */}
        <div className="mx-auto max-w-5xl mb-16">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src={
                  upcomingCompetitions[0].featuredImage || "/placeholder.svg"
                }
                alt={`ARBIChO ${upcomingCompetitions[0].year}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white">
                  ARBIChO {upcomingCompetitions[0].year}
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                    <p className="text-emerald-100">
                      {upcomingCompetitions[0].location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-emerald-400" />
                    <p className="text-emerald-100">
                      {upcomingCompetitions[0].dates}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-100 mb-2">
                    Theme
                  </h3>
                  <p className="text-emerald-100/80">
                    {upcomingCompetitions[0].theme}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-100 mb-4">
                      Eligibility Requirements
                    </h3>
                    <ul className="space-y-2">
                      {upcomingCompetitions[0].eligibility.map(
                        (requirement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-emerald-100/80"
                          >
                            <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-emerald-100 mb-4">
                      Important Dates
                    </h3>
                    <div className="space-y-3">
                      {upcomingCompetitions[0].keyDates
                        .slice(0, 4)
                        .map((date, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="mt-0.5">
                              {date.status === "completed" ? (
                                <CheckCircle className="h-5 w-5 text-emerald-500" />
                              ) : date.status === "upcoming" ? (
                                <AlertCircle className="h-5 w-5 text-yellow-500" />
                              ) : (
                                <Clock className="h-5 w-5 text-blue-500" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-emerald-100">
                                {date.event}
                              </p>
                              <p className="text-sm text-emerald-100/70">
                                {date.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      <Button
                        variant="link"
                        className="text-emerald-400 hover:text-emerald-300 p-0 h-auto"
                        onClick={() =>
                          document
                            .getElementById("timeline")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        View full timeline
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                    Registration Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                  >
                    Download Competition Syllabus
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div id="timeline" className="mx-auto max-w-5xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              ARBIChO 2025 Timeline
            </h2>
            <p className="mt-2 text-emerald-100/80">
              Key dates for the upcoming competition
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-800/20 md:left-1/2" />
            <div className="space-y-8">
              {upcomingCompetitions[0].keyDates.map((date, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="absolute left-4 w-px h-full bg-emerald-800/20 md:left-1/2" />
                    <div
                      className={`
                      flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2
                      ${
                        date.status === "completed"
                          ? "border-emerald-500 bg-emerald-900"
                          : date.status === "upcoming"
                          ? "border-yellow-500 bg-yellow-900"
                          : "border-blue-500 bg-blue-900"
                      }
                      md:absolute md:left-1/2 md:-translate-x-1/2
                    `}
                    >
                      {date.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                      ) : date.status === "upcoming" ? (
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-[50%] md:pr-8"
                        : "md:ml-[50%] md:pl-8"
                    }`}
                  >
                    <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                      <CardContent className="p-4">
                        <div className="space-y-1">
                          <h3 className="font-medium text-emerald-100">
                            {date.event}
                          </h3>
                          <p className="text-sm text-emerald-100/70">
                            {date.date}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competition Format */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Competition Format
            </h2>
            <p className="mt-2 text-emerald-100/80">
              What to expect at ARBIChO 2025
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Theoretical Examination",
                icon: <FileText className="h-6 w-6 text-emerald-400" />,
                description:
                  "A comprehensive 5-hour written examination covering all major areas of chemistry, including organic, inorganic, physical, analytical, and biochemistry.",
              },
              {
                title: "Practical Laboratory",
                icon: <GraduationCap className="h-6 w-6 text-emerald-400" />,
                description:
                  "A challenging 5-hour laboratory session testing experimental skills, data analysis, and problem-solving in a hands-on environment.",
              },
              {
                title: "Research Presentation",
                icon: <Users className="h-6 w-6 text-emerald-400" />,
                description:
                  "Participants will prepare and present a short research proposal on a chemistry topic related to the competition theme.",
              },
            ].map((format, index) => (
              <Card
                key={index}
                className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {format.icon}
                    <CardTitle className="text-emerald-100">
                      {format.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-100/80">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Host Country */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Host Country</h2>
            <p className="mt-2 text-emerald-100/80">
              Learn more about Uzbekistan, the host of ARBIChO 2025
            </p>
          </div>

          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Uzbekistan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-emerald-100">
                  Uzbekistan
                </h3>
                <p className="text-emerald-100/80">
                  Uzbekistan, located in Central Asia, is a country with a rich
                  scientific heritage and a strong commitment to education. It
                  is the birthplace of Abu Reikhan Beruniy, the renowned
                  polymath after whom our competition is named.
                </p>
                <p className="text-emerald-100/80">
                  Participants will have the opportunity to experience
                  Uzbekistan`s unique culture, visit historical sites, and
                  engage with local scientists and students.
                </p>
                <Button
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                  asChild
                >
                  <Link href="/uzbekistan">
                    <Globe className="mr-2 h-4 w-4" />
                    Discover Uzbekistan
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Future Competitions */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Looking Ahead</h2>
            <p className="mt-2 text-emerald-100/80">
              Future ARBIChO competitions
            </p>
          </div>

          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-100">ARBIChO 2026</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <p className="text-emerald-100">
                    {upcomingCompetitions[1].location}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-emerald-400" />
                  <p className="text-emerald-100">
                    {upcomingCompetitions[1].dates}
                  </p>
                </div>
              </div>
              <p className="text-emerald-100/80">
                Planning is already underway for ARBIChO 2026. The competition
                will continue to evolve, introducing new elements while
                maintaining the core focus on chemistry excellence.
              </p>
              <p className="text-emerald-100/80">
                Theme: {upcomingCompetitions[1].theme}
              </p>
              <p className="text-emerald-100/80">
                More details will be announced following the conclusion of
                ARBIChO 2025.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <p className="text-emerald-100/80 mb-6">
            Ready to be part of the next generation of chemistry excellence?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
              Register for ARBIChO 2025
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
              asChild
            >
              <Link href="/past-arbicho">Explore Past Competitions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
