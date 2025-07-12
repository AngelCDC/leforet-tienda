// app/category/[category]/page.tsx
import { Metadata } from "next";
import { client } from "@/app/lib/sanity";
import CategoryPage from "./client"
import { simplifiedProduct } from "@/app/interface";

async function getData(category: string): Promise<simplifiedProduct[]> {
  const query = `*[_type=="product" && category->name=="${category}" ]{
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }`;

  return await client.fetch(query);
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const data = await getData(params.category);
  const capitalized = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return {
    title: `Productos de ${capitalized} | Le Forêt`,
    description: `Explora productos únicos de la categoría ${capitalized}.`,
    openGraph: {
      title: `Compra productos de ${capitalized} | Le Forêt`,
      description: `Explora productos únicos de la categoría ${capitalized}.`,
      images: data[0]?.imageUrl
        ? [{ url: data[0].imageUrl, width: 1200, height: 630 }]
        : [],
    },
  };
}

export default async function CategoryPageWrapper({ params }: { params: { category: string } }) {
  const data = await getData(params.category);
  return <CategoryPage params={{
      category: params.category
  }} />;
}
