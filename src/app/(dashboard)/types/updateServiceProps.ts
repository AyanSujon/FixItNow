export interface IEditService {
  serviceId: string;
  categoryId?: string;
  title?: string;
  description?: string;
  price?: number;
  priceType?:  "FIXED" | "HOURLY";
  estimatedDuration?: number;
  thumbnail?: string;
  isAvailable?: boolean;
}
