"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Coffee,
  Utensils,
  FileText,
  Beaker,
  Music,
  Bus,
  Award,
  Download,
  Printer,
} from "lucide-react";
import Link from "next/link";

// Define schedule types for styling
type ActivityType =
  | "competition"
  | "ceremony"
  | "meal"
  | "cultural"
  | "transportation"
  | "free"
  | "registration";

interface ScheduleItem {
  time: string;
  activity: string;
  description: string;
  location: string;
  type: ActivityType;
}

interface DaySchedule {
  date: string;
  day: string;
  title: string;
  description: string;
  schedule: ScheduleItem[];
}

// Full week schedule data
const weekSchedule: DaySchedule[] = [
  {
    date: "June 1, 2025",
    day: "Day 1",
    title: "Arrival & Registration",
    description: "Teams arrive in Tashkent and complete registration",
    schedule: [
      {
        time: "All Day",
        activity: "Airport Transfers",
        description:
          "Teams arrive at Tashkent International Airport and are transferred to accommodation",
        location: "Tashkent International Airport → Hotels",
        type: "transportation",
      },
      {
        time: "09:00 - 20:00",
        activity: "Registration",
        description:
          "Teams register and receive welcome packages, badges, and information materials",
        location: "Conference Center, Main Hall",
        type: "registration",
      },
      {
        time: "12:00 - 14:00",
        activity: "Lunch",
        description: "Buffet lunch available for arriving teams",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "18:00 - 20:00",
        activity: "Dinner",
        description: "Welcome dinner for all participants",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "20:00 - 21:30",
        activity: "Team Leaders Meeting",
        description:
          "Introductory meeting for team leaders with organizing committee",
        location: "Conference Center, Meeting Room A",
        type: "registration",
      },
    ],
  },
  {
    date: "June 2, 2025",
    day: "Day 2",
    title: "Opening Ceremony",
    description: "Official opening of ARBIChO 2025",
    schedule: [
      {
        time: "07:00 - 08:30",
        activity: "Breakfast",
        description: "Breakfast at hotels",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "09:00 - 10:00",
        activity: "Transfer to Ceremony Venue",
        description: "Buses depart from hotels to the opening ceremony venue",
        location: "Hotels → National Academic Theater",
        type: "transportation",
      },
      {
        time: "10:30 - 12:30",
        activity: "Opening Ceremony",
        description:
          "Official opening with speeches, cultural performances, and parade of nations",
        location: "National Academic Theater",
        type: "ceremony",
      },
      {
        time: "12:30 - 14:00",
        activity: "Lunch",
        description: "Buffet lunch for all participants",
        location: "Theater Reception Hall",
        type: "meal",
      },
      {
        time: "14:30 - 16:30",
        activity: "City Tour",
        description: "Guided tour of Tashkent highlights for students",
        location: "Tashkent City Center",
        type: "cultural",
      },
      {
        time: "14:30 - 17:30",
        activity: "Jury Meeting",
        description:
          "First meeting of the international jury and discussion of theoretical examination",
        location: "Conference Center, Meeting Room B",
        type: "competition",
      },
      {
        time: "18:00 - 20:00",
        activity: "Welcome Dinner",
        description: "Traditional Uzbek dinner with cultural program",
        location: "National Restaurant",
        type: "meal",
      },
      {
        time: "20:30 - 22:00",
        activity: "Team Leaders Meeting",
        description: "Final briefing before competition day",
        location: "Conference Center, Main Hall",
        type: "registration",
      },
    ],
  },
  {
    date: "June 3, 2025",
    day: "Day 3",
    title: "Theoretical Examination",
    description: "First competition day focused on theoretical chemistry",
    schedule: [
      {
        time: "06:30 - 07:30",
        activity: "Breakfast",
        description: "Early breakfast for all participants",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "07:45 - 08:30",
        activity: "Transfer to Examination Venue",
        description: "Buses depart from hotels to the examination venue",
        location: "Hotels → National University",
        type: "transportation",
      },
      {
        time: "08:30 - 09:00",
        activity: "Preparation",
        description: "Students enter examination hall and receive instructions",
        location: "National University, Examination Halls",
        type: "competition",
      },
      {
        time: "09:00 - 14:00",
        activity: "Theoretical Examination",
        description:
          "5-hour theoretical examination covering all areas of chemistry",
        location: "National University, Examination Halls",
        type: "competition",
      },
      {
        time: "09:30 - 13:30",
        activity: "Mentors' Excursion",
        description: "Visit to historical sites for team mentors",
        location: "Departure from National University",
        type: "cultural",
      },
      {
        time: "14:00 - 15:30",
        activity: "Lunch",
        description: "Lunch for all participants after examination",
        location: "University Dining Hall",
        type: "meal",
      },
      {
        time: "16:00 - 18:00",
        activity: "Translation Session",
        description: "Team leaders translate examination papers",
        location: "Conference Center, Translation Rooms",
        type: "competition",
      },
      {
        time: "16:00 - 18:00",
        activity: "Recreational Activities",
        description: "Sports and games for students",
        location: "University Sports Complex",
        type: "free",
      },
      {
        time: "18:30 - 20:00",
        activity: "Dinner",
        description: "Dinner at hotels",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "20:00 - 22:00",
        activity: "Cultural Evening",
        description:
          "International cultural exchange program where teams present their countries",
        location: "Conference Center, Main Hall",
        type: "cultural",
      },
    ],
  },
  {
    date: "June 4, 2025",
    day: "Day 4",
    title: "Practical Examination",
    description: "Second competition day focused on laboratory skills",
    schedule: [
      {
        time: "06:30 - 07:30",
        activity: "Breakfast",
        description: "Early breakfast for all participants",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "07:45 - 08:30",
        activity: "Transfer to Laboratory",
        description: "Buses depart from hotels to the laboratory venue",
        location: "Hotels → Chemistry Research Institute",
        type: "transportation",
      },
      {
        time: "08:30 - 09:00",
        activity: "Laboratory Preparation",
        description:
          "Safety briefing and preparation for practical examination",
        location: "Chemistry Research Institute, Laboratories",
        type: "competition",
      },
      {
        time: "09:00 - 14:00",
        activity: "Practical Examination",
        description:
          "5-hour laboratory examination testing experimental skills",
        location: "Chemistry Research Institute, Laboratories",
        type: "competition",
      },
      {
        time: "09:30 - 13:30",
        activity: "Mentors' Workshop",
        description: "Professional development workshop for team mentors",
        location: "Chemistry Research Institute, Conference Room",
        type: "cultural",
      },
      {
        time: "14:00 - 15:30",
        activity: "Lunch",
        description: "Lunch for all participants after examination",
        location: "Institute Dining Hall",
        type: "meal",
      },
      {
        time: "16:00 - 19:00",
        activity: "Grading Session",
        description: "Jury begins grading theoretical examination papers",
        location: "Conference Center, Grading Rooms",
        type: "competition",
      },
      {
        time: "16:00 - 19:00",
        activity: "City Exploration",
        description: "Free time for students to explore Tashkent in groups",
        location: "Tashkent City Center",
        type: "free",
      },
      {
        time: "19:30 - 21:00",
        activity: "Dinner",
        description: "Dinner at hotels",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "21:00 - 22:30",
        activity: "Social Activities",
        description: "Games and social activities for students",
        location: "Hotel Recreation Areas",
        type: "free",
      },
    ],
  },
  {
    date: "June 5, 2025",
    day: "Day 5",
    title: "Research Presentations",
    description: "Third competition day focused on research and innovation",
    schedule: [
      {
        time: "07:00 - 08:30",
        activity: "Breakfast",
        description: "Breakfast at hotels",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "08:45 - 09:30",
        activity: "Transfer to Presentation Venue",
        description: "Buses depart from hotels to the presentation venue",
        location: "Hotels → Science Academy",
        type: "transportation",
      },
      {
        time: "09:30 - 12:30",
        activity: "Research Presentations",
        description:
          "Students present their research proposals related to the competition theme",
        location: "Science Academy, Auditoriums",
        type: "competition",
      },
      {
        time: "09:30 - 12:30",
        activity: "Grading Session",
        description: "Jury continues grading practical examination results",
        location: "Science Academy, Meeting Rooms",
        type: "competition",
      },
      {
        time: "12:30 - 14:00",
        activity: "Lunch",
        description: "Lunch for all participants",
        location: "Science Academy Cafeteria",
        type: "meal",
      },
      {
        time: "14:30 - 17:30",
        activity: "Scientific Symposium",
        description: "Lectures by renowned scientists on sustainable chemistry",
        location: "Science Academy, Main Auditorium",
        type: "cultural",
      },
      {
        time: "18:00 - 19:30",
        activity: "Dinner",
        description: "Dinner at hotels",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "20:00 - 22:00",
        activity: "Arbitration Session",
        description:
          "Team leaders review scores and discuss with jury if needed",
        location: "Conference Center, Meeting Rooms",
        type: "competition",
      },
      {
        time: "20:00 - 22:00",
        activity: "Movie Night",
        description: "Science-themed movie screening for students",
        location: "Conference Center, Theater Room",
        type: "cultural",
      },
    ],
  },
  {
    date: "June 6, 2025",
    day: "Day 6",
    title: "Cultural Excursion",
    description: "Visit to historical Samarkand",
    schedule: [
      {
        time: "06:00 - 07:00",
        activity: "Breakfast",
        description: "Early breakfast at hotels",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "07:15 - 10:30",
        activity: "Transfer to Samarkand",
        description: "High-speed train journey to Samarkand",
        location: "Tashkent Railway Station → Samarkand",
        type: "transportation",
      },
      {
        time: "10:30 - 13:00",
        activity: "Registan Square Tour",
        description: "Guided tour of the iconic Registan Square and madrasas",
        location: "Registan Square, Samarkand",
        type: "cultural",
      },
      {
        time: "13:00 - 14:30",
        activity: "Lunch",
        description: "Traditional Uzbek lunch in Samarkand",
        location: "Traditional Restaurant, Samarkand",
        type: "meal",
      },
      {
        time: "14:30 - 17:30",
        activity: "Historical Sites Tour",
        description:
          "Visit to Bibi-Khanym Mosque, Shah-i-Zinda necropolis, and Gur-e-Amir mausoleum",
        location: "Various Sites, Samarkand",
        type: "cultural",
      },
      {
        time: "17:30 - 18:30",
        activity: "Free Time",
        description: "Shopping and free exploration of Samarkand",
        location: "Samarkand City Center",
        type: "free",
      },
      {
        time: "18:30 - 20:00",
        activity: "Dinner",
        description: "Farewell dinner in Samarkand with cultural performance",
        location: "Cultural Complex, Samarkand",
        type: "meal",
      },
      {
        time: "20:15 - 23:30",
        activity: "Return to Tashkent",
        description: "High-speed train journey back to Tashkent",
        location: "Samarkand → Tashkent",
        type: "transportation",
      },
    ],
  },
  {
    date: "June 7, 2025",
    day: "Day 7",
    title: "Closing Ceremony & Awards",
    description: "Final day with awards presentation and closing ceremony",
    schedule: [
      {
        time: "07:30 - 09:00",
        activity: "Breakfast",
        description: "Breakfast at hotels",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "09:30 - 10:30",
        activity: "Transfer to Ceremony Venue",
        description: "Buses depart from hotels to the closing ceremony venue",
        location: "Hotels → National Palace of Arts",
        type: "transportation",
      },
      {
        time: "11:00 - 13:30",
        activity: "Closing Ceremony",
        description:
          "Official closing ceremony with medal presentations and speeches",
        location: "National Palace of Arts, Main Hall",
        type: "ceremony",
      },
      {
        time: "13:30 - 15:00",
        activity: "Celebration Lunch",
        description: "Festive lunch for all participants",
        location: "Palace Gardens",
        type: "meal",
      },
      {
        time: "15:00 - 17:00",
        activity: "Photo Sessions",
        description: "Official photos of medal winners and national teams",
        location: "Palace Gardens",
        type: "ceremony",
      },
      {
        time: "17:30 - 19:00",
        activity: "Free Time",
        description: "Time for packing and preparation for departure",
        location: "Hotels",
        type: "free",
      },
      {
        time: "19:30 - 23:00",
        activity: "Farewell Party",
        description: "Celebration dinner and dance party for all participants",
        location: "Grand Ballroom, Central Hotel",
        type: "cultural",
      },
    ],
  },
  {
    date: "June 8, 2025",
    day: "Day 8",
    title: "Departure Day",
    description: "Teams depart from Tashkent",
    schedule: [
      {
        time: "06:00 - 10:00",
        activity: "Breakfast",
        description: "Flexible breakfast times based on departure schedules",
        location: "Hotel Restaurants",
        type: "meal",
      },
      {
        time: "All Day",
        activity: "Airport Transfers",
        description:
          "Scheduled transfers from hotels to Tashkent International Airport",
        location: "Hotels → Tashkent International Airport",
        type: "transportation",
      },
      {
        time: "09:00 - 12:00",
        activity: "Optional City Tour",
        description: "Additional city tour for teams with late departures",
        location: "Tashkent City Center",
        type: "cultural",
      },
    ],
  },
];

// Helper function to get icon for activity type
const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case "competition":
      return <Beaker className="h-5 w-5" />;
    case "ceremony":
      return <Award className="h-5 w-5" />;
    case "meal":
      return <Utensils className="h-5 w-5" />;
    case "cultural":
      return <Music className="h-5 w-5" />;
    case "transportation":
      return <Bus className="h-5 w-5" />;
    case "free":
      return <Coffee className="h-5 w-5" />;
    case "registration":
      return <FileText className="h-5 w-5" />;
    default:
      return <Clock className="h-5 w-5" />;
  }
};

// Helper function to get background color for activity type
const getActivityColor = (type: ActivityType) => {
  switch (type) {
    case "competition":
      return "bg-blue-500/10 border-blue-500/20 text-blue-500";
    case "ceremony":
      return "bg-purple-500/10 border-purple-500/20 text-purple-500";
    case "meal":
      return "bg-amber-500/10 border-amber-500/20 text-amber-500";
    case "cultural":
      return "bg-pink-500/10 border-pink-500/20 text-pink-500";
    case "transportation":
      return "bg-emerald-500/10 border-emerald-500/20 text-emerald-500";
    case "free":
      return "bg-indigo-500/10 border-indigo-500/20 text-indigo-500";
    case "registration":
      return "bg-orange-500/10 border-orange-500/20 text-orange-500";
    default:
      return "bg-gray-500/10 border-gray-500/20 text-gray-500";
  }
};

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>(weekSchedule[0].day);

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
            ARBIChO 2025
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Programme Schedule
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Detailed schedule of events and activities for the ARBIChO 2025
            competition in Tashkent, Uzbekistan
          </p>
        </div>

        {/* Download/Print Buttons */}
        <div className="mx-auto max-w-5xl mb-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
            <Download className="mr-2 h-4 w-4" />
            Download Full Schedule (PDF)
          </Button>
          <Button
            variant="outline"
            className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
          >
            <Printer className="mr-2 h-4 w-4" />
            Print Schedule
          </Button>
        </div>

        {/* Schedule Legend */}
        <div className="mx-auto max-w-5xl mb-8">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { type: "competition", label: "Competition" },
                  { type: "ceremony", label: "Ceremony" },
                  { type: "meal", label: "Meals" },
                  { type: "cultural", label: "Cultural" },
                  { type: "transportation", label: "Transportation" },
                  { type: "free", label: "Free Time" },
                  { type: "registration", label: "Registration/Admin" },
                ].map((item) => (
                  <div
                    key={item.type}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getActivityColor(
                      item.type as ActivityType
                    )}`}
                  >
                    {getActivityIcon(item.type as ActivityType)}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Day Tabs */}
        <div className="mx-auto max-w-5xl mb-8">
          <Tabs
            defaultValue={weekSchedule[0].day}
            onValueChange={setSelectedDay}
          >
            <TabsList className="bg-emerald-900/30 border border-emerald-800/20 w-full flex overflow-x-auto">
              {weekSchedule.map((day) => (
                <TabsTrigger
                  key={day.day}
                  value={day.day}
                  className="flex-1 data-[state=active]:bg-emerald-500 data-[state=active]:text-emerald-950"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-xs">{day.date.split(",")[0]}</span>
                    <span>{day.day}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Selected Day Schedule */}
        {weekSchedule.map(
          (day) =>
            day.day === selectedDay && (
              <div key={day.day} className="mx-auto max-w-5xl">
                <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur mb-8">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <CardTitle className="text-2xl text-emerald-100">
                          {day.title}
                        </CardTitle>
                        <p className="text-emerald-100/70 mt-1">{day.date}</p>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-100/80">
                        <Calendar className="h-5 w-5 text-emerald-400" />
                        <span>{day.day}</span>
                      </div>
                    </div>
                    <p className="text-emerald-100/80 mt-2">
                      {day.description}
                    </p>
                  </CardHeader>
                </Card>

                {/* Timeline */}
                <div className="relative pl-8 space-y-6 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-emerald-800/20 before:left-3">
                  {day.schedule.map((item, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`absolute left-[-29px] p-1 rounded-full ${getActivityColor(
                          item.type
                        )}`}
                      >
                        {getActivityIcon(item.type)}
                      </div>
                      <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
                        <CardContent className="p-4">
                          <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                            <div>
                              <h3 className="font-medium text-lg text-emerald-100">
                                {item.activity}
                              </h3>
                              <p className="text-emerald-100/80 text-sm mt-1">
                                {item.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2 text-emerald-100/70 text-sm">
                                <MapPin className="h-4 w-4 text-emerald-400" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 sm:justify-end">
                              <Clock className="h-4 w-4 text-emerald-400 mt-1" />
                              <span className="text-emerald-100 font-medium">
                                {item.time}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {weekSchedule.findIndex((d) => d.day === day.day) > 0 && (
                    <Button
                      variant="outline"
                      className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                      onClick={() => {
                        const currentIndex = weekSchedule.findIndex(
                          (d) => d.day === day.day
                        );
                        if (currentIndex > 0) {
                          setSelectedDay(weekSchedule[currentIndex - 1].day);
                        }
                      }}
                    >
                      ← Previous Day
                    </Button>
                  )}
                  <div className="flex-1"></div>
                  {weekSchedule.findIndex((d) => d.day === day.day) <
                    weekSchedule.length - 1 && (
                    <Button
                      variant="outline"
                      className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                      onClick={() => {
                        const currentIndex = weekSchedule.findIndex(
                          (d) => d.day === day.day
                        );
                        if (currentIndex < weekSchedule.length - 1) {
                          setSelectedDay(weekSchedule[currentIndex + 1].day);
                        }
                      }}
                    >
                      Next Day →
                    </Button>
                  )}
                </div>
              </div>
            )
        )}

        {/* Additional Information */}
        <div className="mx-auto max-w-3xl mt-16">
          <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-emerald-100">
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-emerald-100/80">
                • All times are in Uzbekistan Time (UZT, UTC+5).
              </p>
              <p className="text-emerald-100/80">
                • Transportation will be provided between official venues and
                accommodation.
              </p>
              <p className="text-emerald-100/80">
                • Students must wear their identification badges at all times.
              </p>
              <p className="text-emerald-100/80">
                • Schedule may be subject to minor changes. Team leaders will be
                notified of any updates.
              </p>
              <p className="text-emerald-100/80">
                • For special dietary requirements, please contact the
                organizing committee in advance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl mt-16 text-center">
          <p className="text-emerald-100/80 mb-6">
            Have questions about the schedule or need assistance?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
              Contact Organizing Committee
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
              asChild
            >
              <Link href="/organizing-committee">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
