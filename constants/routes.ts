import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  SettingsIcon,
  ShieldCheckIcon,
} from "lucide-react";

export interface Route {
  label: string;
  href: string;
  icon: React.ElementType;
}

export const routes = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Workflows",
    href: "/workflows",
    icon: Layers2Icon,
  },
  {
    label: "Credentials",
    href: "/credentials",
    icon: ShieldCheckIcon,
  },
  {
    label: "Billing",
    href: "/billing",
    icon: CoinsIcon,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];
