"use client";

import { useState, useMemo } from "react";
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
const ACTIVITY_TYPES = {
  COMPETITION: "competition",
  CEREMONY: "ceremony",
  MEAL: "meal",
  CULTURAL: "cultural",
  TRANSPORTATION: "transportation",
  FREE: "free",
  REGISTRATION: "registration",
};

// Import schedule data from a separate file to reduce component size
import { weekSchedule } from "@/data/schedule-data";

// Helper function to get icon for activity type
const getActivityIcon = (type) => {
  switch (type) {
    case ACTIVITY_TYPES.COMPETITION:
      return <Beaker className="h-5 w-5" />;
    case ACTIVITY_TYPES.CEREMONY:
      return <Award className="h-5 w-5" />;
    case ACTIVITY_TYPES.MEAL:
      return <Utensils className="h-5 w-5" />;
    case ACTIVITY_TYPES.CULTURAL:
      return <Music className="h-5 w-5" />;
    case ACTIVITY_TYPES.TRANSPORTATION:
      return <Bus className="h-5 w-5" />;
    case ACTIVITY_TYPES.FREE:
      return <Coffee className="h-5 w-5" />;
    case ACTIVITY_TYPES.REGISTRATION:
      return <FileText className="h-5 w-5" />;
    default:
      return <Clock className="h-5 w-5" />;
  }
};

// Helper function to get background color for activity type
const getActivityColor = (type) => {
  switch (type) {
    case ACTIVITY_TYPES.COMPETITION:
      return "bg-blue-500/10 border-blue-500/20 text-blue-500";
    case ACTIVITY_TYPES.CEREMONY:
      return "bg-purple-500/10 border-purple-500/20 text-purple-500";
    case ACTIVITY_TYPES.MEAL:
      return "bg-amber-500/10 border-amber-500/20 text-amber-500";
    case ACTIVITY_TYPES.CULTURAL:
      return "bg-pink-500/10 border-pink-500/20 text-pink-500";
    case ACTIVITY_TYPES.TRANSPORTATION:
      return "bg-emerald-500/10 border-emerald-500/20 text-emerald-500";
    case ACTIVITY_TYPES.FREE:
      return "bg-indigo-500/10 border-indigo-500/20 text-indigo-500";
    case ACTIVITY_TYPES.REGISTRATION:
      return "bg-orange-500/10 border-orange-500/20 text-orange-500";
    default:
      return "bg-gray-500/10 border-gray-500/20 text-gray-500";
  }
};

// Color legend items for better code organization
const COLOR_LEGEND = [
  { type: ACTIVITY_TYPES.COMPETITION, label: "Competition" },
  { type: ACTIVITY_TYPES.CEREMONY, label: "Ceremony" },
  { type: ACTIVITY_TYPES.MEAL, label: "Meals" },
  { type: ACTIVITY_TYPES.CULTURAL, label: "Cultural" },
  { type: ACTIVITY_TYPES.TRANSPORTATION, label: "Transportation" },
  { type: ACTIVITY_TYPES.FREE, label: "Free Time" },
  { type: ACTIVITY_TYPES.REGISTRATION, label: "Registration/Admin" },
];

// Schedule item component to improve code modularity
const ScheduleItem = ({ item }) => (
  <div className="relative">
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
            <span className="text-emerald-100 font-medium">{item.time}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState(
    weekSchedule[0]?.day || "Day 1"
  );

  // Find current day data using useMemo to optimize performance
  const currentDay = useMemo(() => {
    return (
      weekSchedule.find((day) => day.day === selectedDay) || weekSchedule[0]
    );
  }, [selectedDay]);

  // Get current day index for navigation controls
  const currentDayIndex = useMemo(() => {
    return weekSchedule.findIndex((day) => day.day === selectedDay);
  }, [selectedDay]);

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
                {COLOR_LEGEND.map((item) => (
                  <div
                    key={item.type}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getActivityColor(
                      item.type
                    )}`}
                  >
                    {getActivityIcon(item.type)}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Day Tabs */}
        <div className="mx-auto max-w-5xl mb-8">
          <Tabs defaultValue={selectedDay} onValueChange={setSelectedDay}>
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
        {currentDay && (
          <div className="mx-auto max-w-5xl">
            <Card className="border-emerald-800/20 bg-emerald-900/10 backdrop-blur mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl text-emerald-100">
                      {currentDay.title}
                    </CardTitle>
                    <p className="text-emerald-100/70 mt-1">
                      {currentDay.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100/80">
                    <Calendar className="h-5 w-5 text-emerald-400" />
                    <span>{currentDay.day}</span>
                  </div>
                </div>
                <p className="text-emerald-100/80 mt-2">
                  {currentDay.description}
                </p>
              </CardHeader>
            </Card>

            {/* Timeline */}
            <div className="relative pl-8 space-y-6 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-emerald-800/20 before:left-3">
              {currentDay.schedule.map((item, index) => (
                <ScheduleItem key={index} item={item} />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentDayIndex > 0 && (
                <Button
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                  onClick={() =>
                    setSelectedDay(weekSchedule[currentDayIndex - 1].day)
                  }
                >
                  ← Previous Day
                </Button>
              )}
              <div className="flex-1"></div>
              {currentDayIndex < weekSchedule.length - 1 && (
                <Button
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                  onClick={() =>
                    setSelectedDay(weekSchedule[currentDayIndex + 1].day)
                  }
                >
                  Next Day →
                </Button>
              )}
            </div>
          </div>
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
