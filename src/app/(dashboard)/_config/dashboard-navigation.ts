import {
  Home,
  Wrench,
  Calendar,
  User,
  Star,
  Settings,
  Users,
  BarChart3,
} from "lucide-react";

export const navigation = {
  customer: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Browse Services", href: "/dashboard/services", icon: Wrench },
    { name: "My Bookings", href: "/dashboard/my-bookings", icon: Calendar },
    { name: "My Reviews", href: "/dashboard/reviews", icon: Star },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ],

  technician: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Services", href: "/dashboard/services", icon: Wrench },
    { name: "Availability", href: "/dashboard/availability", icon: Calendar },
    { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Earnings", href: "/dashboard/earnings", icon: BarChart3 },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ],

  admin: [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Services", href: "/dashboard/services", icon: Wrench },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ],
} as const;