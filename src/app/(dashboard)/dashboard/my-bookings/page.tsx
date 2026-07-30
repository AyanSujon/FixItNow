import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAllBookings } from "../../_actions/getAllBookings";
import { BookingDetailsProps } from "@/types/types.service";
import { getMe } from "@/services/getMe";

export default async function MyBookings() {
  const result = await getAllBookings();
  const user =await getMe();

const customerId = user.data.profile.id;

  // const bookings = result?.data || [];
const bookings =
  result?.data.filter(
    (booking: BookingDetailsProps) =>
      booking.customerId === customerId
  ) || [];

  if (!bookings.length) {
    return (
      <div className="container mx-auto py-16">
        <Card className="max-w-xl mx-auto">
          <CardContent className="py-12 text-center space-y-4">
            <h2 className="text-2xl font-bold">No Bookings Found</h2>

            <p className="text-muted-foreground">
              You haven't booked any services yet.
            </p>

            <Button asChild>
              <Link href="/services">
                Browse Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-muted-foreground">
          Manage all your booked services.
        </p>
      </div>

      <div className="grid gap-6">
        {bookings.map((booking: BookingDetailsProps) => (
          <Card key={booking.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Image
                  src={booking.service.thumbnail}
                  alt={booking.service.title}
                  width={160}
                  height={120}
                  className="rounded-lg object-cover h-32 w-full md:w-44"
                />

                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {booking.service.title}
                      </h2>

                      <p className="text-muted-foreground line-clamp-2">
                        {booking.service.description}
                      </p>
                    </div>

                    <Badge>{booking.status}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {booking.service.estimatedDuration} mins
                    </div>
                  </div>

                  <div className="font-semibold text-lg">
                    $ {booking.service.price}
                  </div>

                  {booking.note && (
                    <div className="rounded-md bg-muted p-3">
                      <p className="text-sm">
                        <span className="font-semibold">Note:</span>{" "}
                        {booking.note}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Button asChild>
                      <Link href={`/dashboard/bookings/${booking.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}