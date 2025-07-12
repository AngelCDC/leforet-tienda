// app/category/[sexo]/[category]/page.tsx
import { Metadata } from "next";
import { client } from "@/app/lib/sanity";
import { simplifiedProduct } from "@/app/interface";
import CategoryPage from "./client";    

async function getData(category: string, sexo: string): Promise<simplifiedProduct[]> {
  const query = `*[_type=="product" && category->name=="${category}" && sexo->name=="${sexo}"]{
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }`;

  return await client.fetch(query);
}

export async function generateMetadata({ params }: { params: { category: string; sexo: string } }): Promise<Metadata> {
  const data = await getData(params.category, params.sexo);
  const categoryCap = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  const sexoCap = params.sexo.charAt(0).toUpperCase() + params.sexo.slice(1);

  return {
    title: `${sexoCap} para ${categoryCap} | Le Forêt`,
    description: `Descubre la colección de productos para ${sexoCap.toLowerCase()} en la categoría ${categoryCap}.`,
    openGraph: {
      title: `${sexoCap} para ${categoryCap} | Le Forêt`,
      description: `Explora lo mejor en ${categoryCap} para ${sexoCap.toLowerCase()}.`,
      images: data[0]?.imageUrl
        ? [{ url: data[0].imageUrl, width: 1200, height: 630 }]
        : [],
    },
    alternates: {
      canonical: `/category/${params.sexo}/${params.category}`,
    },
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 100;

export default async function Page({ params }: { params: { category: string; sexo: string } }) {
  const data = await getData(params.category, params.sexo);
  return <CategoryPage data={data} category={params.category} sexo={params.sexo} />;
}
