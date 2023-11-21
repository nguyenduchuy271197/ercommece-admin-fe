"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateProduct, createProductSchema } from "@/lib/schema/product";
import ReactQuill from "react-quill";
import ProductImageUploader from "./product-image-uploader";
import { useState } from "react";

export default function CreateProductForm() {
  const [file, setFile] = useState<File>();
  const form = useForm<CreateProduct>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      thumbnail: "",
    },
  });

  function onSubmit(values: CreateProduct) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <ReactQuill theme="snow" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input placeholder="" className="ps-9 pe-16" {...field} />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <span className="text-gray-500">$</span>
                  </div>
                  <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                    <span className="text-gray-500">VND</span>
                  </div>
                </div>

                {/* <Input placeholder="" {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ProductImageUploader file={file} onFileChange={setFile} />

        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
