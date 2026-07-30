// import React from 'react'
// import ServiceGrid from './_components/ServiceGrid'

// export default function Services() {
//   return (
//     <div>
    
//       <ServiceGrid/>
//     </div>

//   )
// }

















import { Suspense } from "react";
import { ServicesSkeleton } from "./_components/ServicesSkeleton";
import { ServicesList } from "./_components/ServicesList";
import ServicesSearchBar from "./_components/ServicesSearchBar";

const Services = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">All Services</h1>
          <p className="text-sm text-muted-foreground">
            Here is our all services.
          </p>
        </div>

        <ServicesSearchBar />
      </div>

      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Services;