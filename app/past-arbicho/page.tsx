import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  Medal,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Past competition data
const pastCompetitions = [
  {
    year: "2023",
    location: "Tashkent, Uzbekistan",
    dates: "May 15-22, 2023",
    participants: "192 students from 48 countries",
    highlights: [
      "Record number of participating countries",
      "First hybrid format with both in-person and virtual components",
      "Special symposium on sustainable chemistry",
    ],
    topCountries: [
      { name: "China", gold: 4, silver: 0, bronze: 0, total: 4 },
      { name: "United States", gold: 3, silver: 1, bronze: 0, total: 4 },
      { name: "South Korea", gold: 2, silver: 2, bronze: 0, total: 4 },
      { name: "Russia", gold: 2, silver: 1, bronze: 1, total: 4 },
      { name: "Japan", gold: 1, silver: 3, bronze: 0, total: 4 },
    ],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
  {
    year: "2022",
    location: "Almaty, Kazakhstan",
    dates: "May 10-17, 2022",
    participants: "180 students from 45 countries",
    highlights: [
      "First post-pandemic in-person competition",
      "Introduction of the research presentation component",
      "Special focus on environmental chemistry",
    ],
    topCountries: [
      { name: "China", gold: 3, silver: 1, bronze: 0, total: 4 },
      { name: "United States", gold: 3, silver: 0, bronze: 1, total: 4 },
      { name: "South Korea", gold: 2, silver: 1, bronze: 1, total: 4 },
      { name: "Japan", gold: 2, silver: 1, bronze: 1, total: 4 },
      { name: "Germany", gold: 1, silver: 2, bronze: 1, total: 4 },
    ],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
  {
    year: "2021",
    location: "Virtual (Hosted by Uzbekistan)",
    dates: "May 16-24, 2021",
    participants: "168 students from 42 countries",
    highlights: [
      "First fully virtual ARBIChO due to the global pandemic",
      "Innovative remote laboratory experiments",
      "Special lecture series by Nobel laureates",
    ],
    topCountries: [
      { name: "China", gold: 4, silver: 0, bronze: 0, total: 4 },
      { name: "United States", gold: 2, silver: 2, bronze: 0, total: 4 },
      { name: "Russia", gold: 2, silver: 1, bronze: 1, total: 4 },
      { name: "South Korea", gold: 1, silver: 3, bronze: 0, total: 4 },
      { name: "Taiwan", gold: 1, silver: 2, bronze: 1, total: 4 },
    ],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
  {
    year: "2020",
    location: "Cancelled due to COVID-19 pandemic",
    dates: "Originally scheduled for May 2020",
    participants: "N/A",
    highlights: [
      "Competition cancelled due to global health concerns",
      "Virtual symposium held in place of the competition",
      "Special online workshops for chemistry students worldwide",
    ],
    topCountries: [],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
  {
    year: "2019",
    location: "Baku, Azerbaijan",
    dates: "May 12-19, 2019",
    participants: "160 students from 40 countries",
    highlights: [
      "10th anniversary of ARBIChO",
      "Introduction of the Junior division",
      "Special focus on petrochemistry",
    ],
    topCountries: [
      { name: "China", gold: 3, silver: 1, bronze: 0, total: 4 },
      { name: "Russia", gold: 3, silver: 0, bronze: 1, total: 4 },
      { name: "United States", gold: 2, silver: 2, bronze: 0, total: 4 },
      { name: "South Korea", gold: 2, silver: 1, bronze: 1, total: 4 },
      { name: "Japan", gold: 1, silver: 2, bronze: 1, total: 4 },
    ],
    featuredImage: "/placeholder.svg?height=400&width=800",
  },
];

// Statistics
const statistics = [
  {
    label: "Total Competitions",
    value: "12",
    icon: <Trophy className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: "Countries Participated",
    value: "68",
    icon: <MapPin className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: "Total Participants",
    value: "2,100+",
    icon: <Users className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: "Gold Medals Awarded",
    value: "240",
    icon: <Medal className="h-5 w-5 text-emerald-400" />,
  },
];

export default function PastARBIChOPage() {
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
            Competition History
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Past ARBIChO Competitions
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Explore the rich history of the Abu Reikhan Beruniy International
            Chemistry Olympiad and its impact on young scientists worldwide
          </p>
        </div>

        {/* Statistics */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    {stat.icon}
                    <p className="text-3xl font-bold text-emerald-100">
                      {stat.value}
                    </p>
                    <p className="text-sm text-emerald-100/70">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Competitions Tabs */}
        <div className="mx-auto max-w-5xl mb-16">
          <Tabs defaultValue={pastCompetitions[0].year} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-emerald-900/30 border border-emerald-800/20">
                {pastCompetitions.map((comp) => (
                  <TabsTrigger
                    key={comp.year}
                    value={comp.year}
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-emerald-950"
                  >
                    {comp.year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {pastCompetitions.map((competition) => (
              <TabsContent
                key={competition.year}
                value={competition.year}
                className="space-y-8"
              >
                {/* Competition Overview */}
                <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={competition.featuredImage || "/placeholder.svg"}
                      alt={`ARBIChO ${competition.year}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-3xl font-bold text-white">
                        ARBIChO {competition.year}
                      </h2>
                      <p className="text-emerald-100/90">
                        {competition.location}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-emerald-400" />
                          <p className="text-emerald-100">
                            {competition.dates}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-emerald-400" />
                          <p className="text-emerald-100">
                            {competition.participants}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-emerald-100">
                          Highlights
                        </h3>
                        <ul className="space-y-1">
                          {competition.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-emerald-100/80"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Medal Table */}
                {competition.topCountries.length > 0 && (
                  <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-emerald-100">
                        Top Performing Countries
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-emerald-800/20">
                              <th className="text-left py-3 px-4 text-emerald-100">
                                Rank
                              </th>
                              <th className="text-left py-3 px-4 text-emerald-100">
                                Country
                              </th>
                              <th className="text-center py-3 px-4 text-yellow-500">
                                Gold
                              </th>
                              <th className="text-center py-3 px-4 text-gray-400">
                                Silver
                              </th>
                              <th className="text-center py-3 px-4 text-amber-700">
                                Bronze
                              </th>
                              <th className="text-center py-3 px-4 text-emerald-100">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {competition.topCountries.map((country, index) => (
                              <tr
                                key={index}
                                className="border-b border-emerald-800/10"
                              >
                                <td className="py-3 px-4 text-emerald-100">
                                  {index + 1}
                                </td>
                                <td className="py-3 px-4 text-emerald-100">
                                  {country.name}
                                </td>
                                <td className="py-3 px-4 text-center text-emerald-100/80">
                                  {country.gold}
                                </td>
                                <td className="py-3 px-4 text-center text-emerald-100/80">
                                  {country.silver}
                                </td>
                                <td className="py-3 px-4 text-center text-emerald-100/80">
                                  {country.bronze}
                                </td>
                                <td className="py-3 px-4 text-center font-medium text-emerald-100">
                                  {country.total}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Gallery Preview */}
                {competition.year !== "2020" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        Photo Gallery
                      </h3>
                      <Link
                        href="/gallery"
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                      >
                        <span>View all photos</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="relative aspect-square overflow-hidden rounded-lg"
                        >
                          <Image
                            src={`/placeholder.svg?height=300&width=300`}
                            alt={`ARBIChO ${competition.year} Photo ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Historical Timeline */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">ARBIChO Timeline</h2>
            <p className="mt-2 text-emerald-100/80">
              The evolution of our prestigious competition
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-800/20 md:left-1/2" />
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Inaugural Competition",
                  description:
                    "The first ARBIChO was held in Tashkent, Uzbekistan with 20 participating countries",
                },
                {
                  year: "2015",
                  title: "5th Anniversary",
                  description:
                    "Expanded to include 35 countries and introduced the research component",
                },
                {
                  year: "2019",
                  title: "10th Anniversary",
                  description:
                    "Celebrated a decade of excellence with special events and the introduction of the Junior division",
                },
                {
                  year: "2021",
                  title: "Virtual Innovation",
                  description:
                    "Successfully adapted to a fully virtual format during the global pandemic",
                },
                {
                  year: "2023",
                  title: "Record Participation",
                  description:
                    "Welcomed 48 countries, the highest number in ARBIChO history",
                },
              ].map((event, index) => (
                <div key={event.year} className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="absolute left-4 w-px h-full bg-emerald-800/20 md:left-1/2" />
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500 bg-emerald-950 text-emerald-400 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <Star className="h-4 w-4" />
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
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-emerald-100">
                          <span className="text-emerald-400">{event.year}</span>{" "}
                          - {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-emerald-100/80">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <p className="text-emerald-100/80 mb-6">
            Interested in learning more about upcoming ARBIChO competitions?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              className="bg-emerald-500 text-white hover:bg-emerald-600"
              asChild
            >
              <Link href="/future-arbicho">
                Explore Future ARBIChO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
              asChild
            >
              <Link href="/gallery">View Photo Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
