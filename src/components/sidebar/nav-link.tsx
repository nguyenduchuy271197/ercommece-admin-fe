import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface INavLink {
  id: string;
  href: string;
  label: string;
  icon: LucideIcon;
}

export default function NavLink({ href, label, icon: Icon }: INavLink) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className="w-full flex items-center justify-center py-4 hover:bg-secondary hover:text-secondary-foreground transition-all"
        >
          <Icon className="w-5 h-5" />
          <span aria-hidden="true" className="sr-only">
            {label}
          </span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" arrowPadding={100}>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
