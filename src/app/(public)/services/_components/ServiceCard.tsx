

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";

import { Service } from "@/types/types.service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-52 w-full">
        <Image
          src={service.thumbnail}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <Badge variant={service.isAvailable ? "default" : "secondary"}>
            {service.isAvailable ? "Available" : "Unavailable"}
          </Badge>

          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{service.averageRating}</span>
            <span className="text-muted-foreground">
              ({service.totalReviews})
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold">{service.title}</h3>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {service.estimatedDuration} min
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">
              ${service.price}
            </p>
            <p className="text-xs text-muted-foreground">
              {service.priceType === "FIXED"
                ? "Fixed Price"
                : "Per Hour"}
            </p>
          </div>

          <Button>Book Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}