import PageHeading from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
import tasks from "./data/tasks.json";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between gap-2">
        <PageHeading
          heading="Products"
          subheading="Here's a list of your tasks for this month!"
        />
        <div className="flex items-center gap-2">
          <Button className="gap-2" asChild>
            <Link href="/products/new">
              <PlusCircle className="w-4 h-4" />
              New Product
            </Link>
          </Button>
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
