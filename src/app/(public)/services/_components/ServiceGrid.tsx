




// import FilterDrawer from "./FilterDrawer";
// import ServiceCard from "./ServiceCard";
// import { getAllServices } from "../../_actions/getAllServices";
// import { Service } from "@/types/types.service";

// export default async function ServiceGrid() {
//   const { data: services } = await getAllServices();

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold">Our Services</h1>
//           <p className="mt-2 text-muted-foreground">
//             Professional services at your doorstep
//           </p>
//         </div>

//         <div className="flex flex-col gap-8 lg:flex-row">
//           <FilterDrawer />

//           <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//             {services.map((service: Service) => (
//               <ServiceCard
//                 key={service.id}
//                 service={service}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











import FilterDrawer from "./FilterDrawer";
import Pagination from "./Pagination";
import ServiceCard from "./ServiceCard";
import { getAllServices } from "../../_actions/getAllServices";
import { Service } from "@/types/types.service";

interface ServiceGridProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function ServiceGrid({
  searchParams,
}: ServiceGridProps) {
  const params = await searchParams;

  const currentPage = Number(params.page || 1);

  const { data: services, meta } = await getAllServices(currentPage);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-muted-foreground">
            Professional services at your doorstep
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <FilterDrawer />

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service: Service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>

            <Pagination
              currentPage={meta.page}
              totalPages={meta.totalPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}