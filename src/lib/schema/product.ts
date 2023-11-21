import z from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  price: z.number(),
});
export type Product = z.infer<typeof productSchema>;

export const createProductSchema = productSchema.omit({
  id: true,
  slug: true,
});
export type CreateProduct = z.infer<typeof createProductSchema>;
export type UpdateProduct = CreateProduct;

export type ProductId = Product["id"];
export type ProductCardProps = Product;
