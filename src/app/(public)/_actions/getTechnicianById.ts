// "use server";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// export interface TechnicianProfile {
//   id: string;
//   userId: string;
//   bio: string;
//   profilePhoto: string;
//   description: string;
//   profession: string;
//   skills: string;
//   yearsOfExperience: number;
//   hourlyRate: string;
//   averageRating: number;
//   totalReviews: number;
//   totalCompletedJobs: number;
//   isAvailable: boolean;
//   responseTime: number;
//   isApproved: boolean;
//   address: string;
//   city: string;
//   district: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Technician {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   activeStatus: string;
//   role: string;
//   isVerified: boolean;
//   lastLoginAt: string;
//   createdAt: string;
//   updatedAt: string;
//   technicianProfile: TechnicianProfile;
// }

// export interface TechnicianDetailsResponse {
//   success: boolean;
//   statusCode: number;
//   message: string;
//   data: {
//     technician: Technician;
//   };
// }

// export async function getTechnicianById(
//   id: string
// ): Promise<TechnicianDetailsResponse> {
//   try {
//     const res = await fetch(`${API_URL}/api/technicians/${id}`, {
//       method: "GET",
//       cache: "no-store",
//     });

//     const data = await res.json();

// console.log(data)













//     if (!res.ok) {
//       throw new Error(data?.message || "Failed to fetch technician.");
//     }

//     return data;
//   } catch (error) {
//     console.error("Error fetching technician:", error);

//     throw new Error(
//       error instanceof Error
//         ? error.message
//         : "Something went wrong while fetching technician."
//     );
//   }
// }

















"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getTechnicianById = async (technicianId: string) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${API_URL}/api/technicians/${technicianId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
      },
      next: {
        tags: ["booking"],
      },
      cache: "no-store",
    });

    const result = await res.json();

    // revalidateTag("booking", "max");

    return result;
  } catch (error) {
    console.error("Failed to fetch booking:", error);

    return {
      success: false,
      message: "Failed to fetch booking.",
      data: null,
    };
  }
};