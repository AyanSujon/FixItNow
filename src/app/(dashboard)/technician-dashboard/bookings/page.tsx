import { CalendarDays, CheckCircle2, Clock3, DollarSign, ListChecks, Wrench, XCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total Bookings",
    value: 128,
    icon: ListChecks,
    color: "text-primary",
    description: "All time bookings",
  },
  {
    title: "Pending Requests",
    value: 12,
    icon: Clock3,
    color: "text-yellow-500",
    description: "Waiting for response",
  },
  {
    title: "Today's Jobs",
    value: 5,
    icon: CalendarDays,
    color: "text-blue-500",
    description: "Scheduled today",
  },
  {
    title: "Accepted",
    value: 46,
    icon: CheckCircle2,
    color: "text-emerald-500",
    description: "Ready to work",
  },
  {
    title: "In Progress",
    value: 7,
    icon: Wrench,
    color: "text-orange-500",
    description: "Currently working",
  },
  {
    title: "Completed",
    value: 63,
    icon: CheckCircle2,
    color: "text-green-600",
    description: "Successfully finished",
  },
  {
    title: "Cancelled",
    value: 8,
    icon: XCircle,
    color: "text-red-500",
    description: "Cancelled bookings",
  },
  {
    title: "Total Earnings",
    value: "$54,800",
    icon: DollarSign,
    color: "text-emerald-600",
    description: "Lifetime earnings",
  },
];

export default function TechnicianBookingsPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Booking Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage customer booking requests, monitor ongoing jobs, and track
          completed services.
        </p>
      </div>

      {/* Statistics */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card
                key={stat.title}
                className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>

                  <div className="rounded-lg bg-muted p-2">
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}