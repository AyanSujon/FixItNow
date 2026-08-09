

// "use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const slides = [
  {
    id: 1,
    badge: "Trusted Home Services",
    title: "Expert Help, Right When You Need It.",
    description:
      "Find trusted professionals for AC repair, plumbing, electrical work, cleaning, painting, and more — all in one place.",
    primaryButton: "Find a Service",
    primaryHref: "/services",
    secondaryButton: "Find Technicians",
    secondaryHref: "/find-technicians",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "120+ Reviews",
    floatingText: "Verified Professional",
  },
  {
    id: 2,
    badge: "Easy Booking",
    title: "Choose. Schedule. Done.",
    description:
      "Pick your service, choose a qualified technician, select an available time slot, and book your service in just a few clicks.",
    primaryButton: "Book a Technician",
    primaryHref: "/find-technicians",
    secondaryButton: "How It Works",
    secondaryHref: "/how-it-works",
    icon: CalendarCheck,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "Easy Scheduling",
    floatingText: "Available Today",
  },
  {
    id: 3,
    badge: "Verified Professionals",
    title: "Skilled Professionals You Can Trust.",
    description:
      "Compare technician profiles, ratings, experience, services, and availability before making your choice.",
    primaryButton: "Find Technicians",
    primaryHref: "/find-technicians",
    secondaryButton: "Explore Services",
    secondaryHref: "/services",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "Top Rated",
    floatingText: "Verified Technician",
  },
  {
    id: 4,
    badge: "For Technicians",
    title: "Turn Your Skills Into More Jobs.",
    description:
      "Create your professional profile, manage your availability, receive bookings, and grow your home-service business.",
    primaryButton: "Join as Technician",
    primaryHref: "/register",
    secondaryButton: "Learn More",
    secondaryHref: "/how-it-works",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    rating: "Grow",
    reviews: "Your Business",
    floatingText: "More Opportunities",
  },
];

export default function HeroCarousel() {
  return (
    <section
      className="
        relative min-h-[80vh] w-full overflow-hidden
        bg-background
        transition-colors duration-300
      "
    >
      {/* =========================
          BACKGROUND DECORATIONS
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left glow */}
        <div
          className="
            absolute -left-32 -top-32
            h-72 w-72
            rounded-full
            bg-orange-500/10
            blur-3xl
          "
        />

        {/* Bottom-right glow */}
        <div
          className="
            absolute -bottom-32 -right-32
            h-96 w-96
            rounded-full
            bg-orange-500/10
            blur-3xl
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)]
            bg-[size:32px_32px]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />
      </div>

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div
        className="
          container relative mx-auto
          flex min-h-[80vh]
          max-w-7xl
          items-center
          px-4 py-6
          sm:px-6 sm:py-8
          lg:px-8 lg:py-8
        "
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide) => {
              const Icon = slide.icon;

              return (
                <CarouselItem key={slide.id}>
                  <div
                    className="
                      grid
                      min-h-[80vh]
                      items-center
                      gap-10
                      lg:grid-cols-2
                      lg:gap-14
                    "
                  >
                    {/* =========================
                        LEFT CONTENT
                    ========================== */}
                    <div
                      className="
                        order-2
                        flex flex-col
                        items-center
                        text-center
                        lg:order-1
                        lg:items-start
                        lg:text-left
                      "
                    >
                      {/* Badge */}
                      <Badge
                        variant="outline"
                        className="
                          mb-5
                          border-orange-500/30
                          bg-orange-500/10
                          px-3 py-1.5
                          text-orange-600
                          dark:text-orange-400
                        "
                      >
                        <Icon className="mr-1.5 h-4 w-4" />
                        {slide.badge}
                      </Badge>

                      {/* Heading */}
                      <h1
                        className="
                          max-w-2xl
                          text-4xl
                          font-bold
                          leading-[1.08]
                          tracking-tight
                          text-foreground
                          sm:text-5xl
                          md:text-6xl
                          lg:text-6xl
                          xl:text-7xl
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p
                        className="
                          mt-5
                          max-w-xl
                          text-base
                          leading-7
                          text-muted-foreground
                          sm:text-lg
                          md:mt-6
                          md:text-xl
                          md:leading-8
                        "
                      >
                        {slide.description}
                      </p>

                      {/* Buttons */}
                      <div
                        className="
                          mt-7
                          flex w-full
                          flex-col
                          gap-3
                          sm:w-auto
                          sm:flex-row
                          sm:gap-4
                        "
                      >
                        {/* Primary */}
                        <Button
                          asChild
                          size="lg"
                          className="
                            h-12
                            w-full
                            bg-[#ff7308]
                            px-6
                            text-white
                            shadow-lg
                            shadow-orange-500/20
                            hover:bg-[#e96500]
                            sm:w-auto
                          "
                        >
                          <Link href={slide.primaryHref}>
                            {slide.primaryButton}

                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>

                        {/* Secondary */}
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="
                            h-12
                            w-full
                            border-border
                            bg-background
                            px-6
                            text-foreground
                            hover:border-orange-500/40
                            hover:bg-orange-500/10
                            sm:w-auto
                          "
                        >
                          <Link href={slide.secondaryHref}>
                            {slide.secondaryButton}
                          </Link>
                        </Button>
                      </div>

                      {/* Trust indicators */}
                      <div
                        className="
                          mt-8
                          flex flex-wrap
                          items-center
                          justify-center
                          gap-x-5
                          gap-y-3
                          text-sm
                          text-muted-foreground
                          lg:justify-start
                        "
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Verified Professionals</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-orange-500" />
                          <span>Secure Booking</span>
                        </div>
                      </div>
                    </div>

                    {/* =========================
                        RIGHT VISUAL
                    ========================== */}
                    <div
                      className="
                        order-1
                        relative
                        flex
                        items-center
                        justify-center
                        lg:order-2
                      "
                    >
                      {/* Main image */}
                      <div
                        className="
                          relative
                          aspect-[4/3]
                          w-full
                          max-w-xl
                          overflow-hidden
                          rounded-3xl
                          border
                          border-border
                          bg-muted
                          shadow-2xl
                          shadow-orange-500/10
                        "
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          priority={slide.id === 1}
                          className="object-cover"
                          sizes="
                            (max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            600px
                          "
                        />

                        {/* Image overlay */}
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/60
                            via-black/10
                            to-transparent
                          "
                        />

                        {/* Bottom image content */}
                        <div
                          className="
                            absolute
                            bottom-4
                            left-4
                            right-4
                            sm:bottom-6
                            sm:left-6
                            sm:right-6
                          "
                        >
                          <div
                            className="
                              flex
                              items-end
                              justify-between
                              gap-3
                            "
                          >
                            <div>
                              <p
                                className="
                                  text-sm
                                  font-medium
                                  text-white/80
                                "
                              >
                                FixItNow
                              </p>

                              <p
                                className="
                                  mt-1
                                  text-lg
                                  font-semibold
                                  text-white
                                  sm:text-xl
                                "
                              >
                                Professional Home Services
                              </p>
                            </div>

                            {/* Rating */}
                            <div
                              className="
                                flex shrink-0
                                items-center
                                gap-1
                                rounded-full
                                border
                                border-white/20
                                bg-white/95
                                px-3 py-1.5
                                text-sm
                                font-semibold
                                text-gray-900
                                shadow-lg
                                dark:bg-white/90
                              "
                            >
                              <Star
                                className="
                                  h-4 w-4
                                  fill-orange-400
                                  text-orange-400
                                "
                              />

                              {slide.rating}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* =========================
                          FLOATING VERIFIED CARD
                      ========================== */}
                      <div
                        className="
                          absolute
                          -left-2
                          top-5
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-border
                          bg-card
                          p-3
                          text-card-foreground
                          shadow-xl
                          sm:-left-5
                          sm:top-8
                          sm:p-4
                        "
                      >
                        <div
                          className="
                            flex
                            h-9 w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-green-500/10
                            sm:h-11
                            sm:w-11
                          "
                        >
                          <CheckCircle2
                            className="
                              h-5 w-5
                              text-green-500
                              sm:h-6
                              sm:w-6
                            "
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-xs
                              font-medium
                              text-muted-foreground
                            "
                          >
                            Trusted
                          </p>

                          <p
                            className="
                              text-sm
                              font-semibold
                              text-card-foreground
                              sm:text-base
                            "
                          >
                            {slide.floatingText}
                          </p>
                        </div>
                      </div>

                      {/* =========================
                          FLOATING REVIEW CARD
                      ========================== */}
                      <div
                        className="
                          absolute
                          -bottom-5
                          -right-2
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-border
                          bg-card
                          px-4 py-3
                          text-card-foreground
                          shadow-xl
                          sm:-right-5
                          sm:px-5
                        "
                      >
                        <div
                          className="
                            flex
                            h-9 w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-orange-500/10
                          "
                        >
                          <Users
                            className="
                              h-4 w-4
                              text-orange-500
                              sm:h-5
                              sm:w-5
                            "
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-sm
                              font-semibold
                              text-card-foreground
                            "
                          >
                            {slide.reviews}
                          </p>

                          <div className="mt-0.5 flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="
                                  h-3 w-3
                                  fill-orange-400
                                  text-orange-400
                                "
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* =========================
              DESKTOP / TABLET ARROWS
          ========================== */}
          <CarouselPrevious
            className="
              left-0
              hidden
              border-border
              bg-background
              text-foreground
              shadow-md
              hover:bg-muted
              sm:flex
              lg:-left-4
            "
          />

          <CarouselNext
            className="
              right-0
              hidden
              border-border
              bg-background
              text-foreground
              shadow-md
              hover:bg-muted
              sm:flex
              lg:-right-4
            "
          />

          {/* =========================
              MOBILE ARROWS
          ========================== */}
          <div className="mt-8 flex justify-center gap-3 sm:hidden">
            <CarouselPrevious
              className="
                static
                translate-y-0
                border-border
                bg-background
                text-foreground
                hover:bg-muted
              "
            />

            <CarouselNext
              className="
                static
                translate-y-0
                border-border
                bg-background
                text-foreground
                hover:bg-muted
              "
            />
          </div>

          {/* =========================
              SLIDE INDICATORS
          ========================== */}
          <div className="mt-8 flex justify-center gap-2">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="
                  h-2 w-2
                  rounded-full
                  bg-orange-500/30
                  transition-all
                "
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}