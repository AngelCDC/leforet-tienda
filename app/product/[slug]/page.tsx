// app/product/[slug]/page.tsx
import { Metadata } from "next";
import { client } from "@/app/lib/sanity";
import { fullProduct } from "@/app/interface";
import ProductPage from "./client";

async function getData(slug: string): Promise<fullProduct> {
  const query = `*[_type=="product" && slug.current=="${slug}"][0]{
  _id,
  "images": images[].asset->url, // <-- esto convierte cada imagen en un string
  price,
  name,
  description,
  "slug": slug.current,
  "sexo": sexo->name,
  "Categoria": categories[0]->name,
}`;


  return await client.fetch(query);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getData(params.slug);

  return {
    title: `${data.name} | Le Forêt`,
    description: `Compra ${data.name} por solo $${data.price}. Categoría: ${data.Categoria}`,
    openGraph: {
      title: `${data.name} | Le Forêt`,
      description: data.description,
      images: data.images?.length
        ? [
            {
              url: data.images[0]?.asset?.url || data.images[0],
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
    alternates: {
      canonical: `/product/${params.slug}`,
    },
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 100;

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return <ProductPage data={data} />;
}
