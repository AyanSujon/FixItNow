// import { getBookingById } from '@/app/(dashboard)/_actions/getBookingById';
// import React from 'react'

// export default async function SingleBookingPage({ params }: { params: Promise<{ id: string }> }) {
// const {id} = await params;

// const result = await getBookingById(id);

// console.log(result)
//   return (
//     <div>SingleBookingPage {id}</div>
//   )
// }







import { getBookingById } from "@/app/(dashboard)/_actions/getBookingById";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  FileText,
  User,
  Wrench,
  CreditCard,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bookingStatusConfig, paymentStatusConfig } from "../config/bookingStatusConfig";
import { BookingSlot } from "@/app/(dashboard)/types/bookingSlotProps";

export default async function SingleBookingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const result = await getBookingById(id);

  const booking = result?.data;

  if (!booking) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p>Booking not found.</p>
      </div>
    );
  }

  const bookingStatus =
    bookingStatusConfig[
      booking.status as keyof typeof bookingStatusConfig
    ];

  const paymentStatus =
    paymentStatusConfig[
      booking.paymentStatus as keyof typeof paymentStatusConfig
    ];

  return (
    <div className="container mx-auto max-w-6xl space-y-6 py-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <Link href="/dashboard/my-bookings">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Bookings
            </Button>
          </Link>
        </div>

        <div className="flex gap-2">
          <Badge className={bookingStatus.className}>
            {booking.status}
          </Badge>

          <Badge className={paymentStatus.className}>
            {booking.paymentStatus}
          </Badge>
        </div>
      </div>

      {/* Service */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Service Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {booking.service.image && (
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src={booking.service.image}
                alt={booking.service.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold">
              {booking.service.title}
            </h2>

            <p className="mt-2 text-muted-foreground">
              {booking.service.description}
            </p>
          </div>

          <div className="text-2xl font-bold text-primary">
            ৳ {booking.service.price}
          </div>
        </CardContent>
      </Card>

      {/* Grid */}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Booking */}

        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Booking Date
                </p>

                <p className="font-medium">
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Payment
                </p>

                <p>{booking.paymentStatus}</p>
              </div>
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 font-medium">
                <Clock className="h-5 w-5" />
                Selected Slots
              </p>

              <div className="space-y-2">
                {booking.bookingSlots.length > 0 ? (
                  booking.bookingSlots.map((slot: BookingSlot) => (
                    <Badge
                      key={slot.id}
                      variant="secondary"
                      className="mr-2"
                    >
                      {slot.startsAt} - {slot.endsAt}
                    </Badge>
                  ))
                ) : (
                  <p className="text-muted-foreground">
                    No slot information
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technician */}

        <Card>
          <CardHeader>
            <CardTitle>Technician</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {booking.technician.profilePhoto && (
              <Image
                src={booking.technician.profilePhoto}
                alt="Technician"
                width={90}
                height={90}
                className="rounded-full object-cover"
              />
            )}

            <div>
              <h3 className="text-lg font-semibold">
                {booking.technician.user?.name ??
                  "Assigned Technician"}
              </h3>

              <p className="text-muted-foreground">
                {booking.technician.bio}
              </p>
            </div>

            <div>
              <p className="font-medium">Description</p>

              <p className="text-muted-foreground">
                {booking.technician.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Note */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Customer Note
          </CardTitle>
        </CardHeader>

        <CardContent>
          {booking.note ? (
            <p>{booking.note}</p>
          ) : (
            <p className="text-muted-foreground">
              No additional note provided.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Customer */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Customer Information
          </CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p>{booking.customer.name}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p>{booking.customer.email}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p>{booking.customer.phone}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Booking ID
            </p>

            <p className="break-all text-xs">{booking.id}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}