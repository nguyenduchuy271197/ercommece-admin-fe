import { Boxes, LayoutDashboard, ShoppingBag, User } from "lucide-react";

export const ROUTES = [
  {
    id: "dashboard",
    href: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "users",
    href: "/users",
    label: "Users",
    icon: User,
  },
  {
    id: "products",
    href: "/products",
    label: "Products",
    icon: Boxes,
  },
  {
    id: "orders",
    href: "/orders",
    label: "Orders",
    icon: ShoppingBag,
  },
];
