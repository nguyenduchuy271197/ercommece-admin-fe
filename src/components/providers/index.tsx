import { ReactNode } from "react";
import { TooltipProvider } from "../ui/tooltip";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <TooltipProvider delayDuration={200}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </TooltipProvider>
    </ClerkProvider>
  );
}
