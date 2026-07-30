export interface IService {
  id: string;
  title: string;
  description: string;
  price: number;
  priceType: "FIXED" | "HOURLY";
  estimatedDuration: number;
  thumbnail: string;
  isAvailable: boolean;
  averageRating: number;
  totalReviews: number;
}