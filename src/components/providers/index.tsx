import { ReactNode } from "react";
import { TooltipProvider } from "../ui/tooltip";
import { EdgeStoreProvider } from "@/lib/edgestore";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={200}>
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </TooltipProvider>
  );
}
