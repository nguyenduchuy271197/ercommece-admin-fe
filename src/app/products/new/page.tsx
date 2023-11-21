import PageHeading from "@/components/page-heading";
import CreateProductForm from "./_components/create-product-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function CreateProductPage() {
  return (
    <div className="max-w-2xl">
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between gap-2">
          <PageHeading
            heading="Create New Product"
            subheading="Here's a list of your tasks for this month!"
          />
          <div>
            <Button variant="ghost" asChild>
              <Link href="/products">
                <MoveRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
        <CreateProductForm />
      </div>
    </div>
  );
}
