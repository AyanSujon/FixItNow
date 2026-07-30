"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterDrawerProps {
  className?: string;
}

export default function FilterDrawer({
  className,
}: FilterDrawerProps) {
  const [availableOnly, setAvailableOnly] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      <div className="mb-5 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[320px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>

            <SidebarContent
              availableOnly={availableOnly}
              setAvailableOnly={setAvailableOnly}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden w-72 rounded-xl border bg-white p-5 lg:block ${className}`}
      >
        <SidebarContent
          availableOnly={availableOnly}
          setAvailableOnly={setAvailableOnly}
        />
      </aside>
    </>
  );
}

function SidebarContent({
  availableOnly,
  setAvailableOnly,
}: {
  availableOnly: boolean;
  setAvailableOnly: (value: boolean) => void;
}) {
  return (
    <div className="space-y-5 pt-5">
      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Search
        </label>

        <div className="relative">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search service..."
            className="pl-9"
          />
        </div>
      </div>

      <Accordion
        type="multiple"
        defaultValue={[
          "category",
          "price",
          "duration",
          "rating",
        ]}
      >
        {/* Category */}
        <AccordionItem value="category">
          <AccordionTrigger>
            Category
          </AccordionTrigger>

          <AccordionContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="plumbing">
                  Plumbing
                </SelectItem>

                <SelectItem value="electrical">
                  Electrical
                </SelectItem>

                <SelectItem value="cleaning">
                  Cleaning
                </SelectItem>

                <SelectItem value="painting">
                  Painting
                </SelectItem>

                <SelectItem value="ac">
                  AC Repair
                </SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        {/* Price */}
        <AccordionItem value="price">
          <AccordionTrigger>
            Price
          </AccordionTrigger>

          <AccordionContent className="space-y-3">
            <Input
              type="number"
              placeholder="Min Price"
            />

            <Input
              type="number"
              placeholder="Max Price"
            />

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Type" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="FIXED">
                  Fixed
                </SelectItem>

                <SelectItem value="HOURLY">
                  Hourly
                </SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        {/* Duration */}
        <AccordionItem value="duration">
          <AccordionTrigger>
            Duration
          </AccordionTrigger>

          <AccordionContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any Duration" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="30">
                  Under 30 min
                </SelectItem>

                <SelectItem value="60">
                  Under 1 hour
                </SelectItem>

                <SelectItem value="120">
                  Under 2 hours
                </SelectItem>

                <SelectItem value="240">
                  2+ hours
                </SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        {/* Rating */}
        <AccordionItem value="rating">
          <AccordionTrigger>
            Rating
          </AccordionTrigger>

          <AccordionContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Minimum Rating" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="5">
                  ⭐⭐⭐⭐⭐
                </SelectItem>

                <SelectItem value="4">
                  ⭐⭐⭐⭐+
                </SelectItem>

                <SelectItem value="3">
                  ⭐⭐⭐+
                </SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="available"
          checked={availableOnly}
          onCheckedChange={(checked) =>
            setAvailableOnly(checked === true)
          }
        />

        <label
          htmlFor="available"
          className="text-sm font-medium"
        >
          Available Only
        </label>
      </div>

      <div className="space-y-2 pt-2">
        <Button className="w-full">
          Apply Filters
        </Button>

        <Button
          variant="outline"
          className="w-full"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      </div>
    </div>
  );
}