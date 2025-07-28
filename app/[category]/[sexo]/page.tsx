// app/category/[category]/page.tsx

import { simplifiedProduct } from "@/app/interface"
import { client } from "@/app/lib/sanity";
import CategoryProducts from "./client";

import { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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

export default async function CategoryPage({
  params,
}: {
  params: { category: string, sexo: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category, params.sexo);

  return (
    <div className="bg-white py-2 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-gray-100">
          <div className="max-w-7xl mx-auto  py-3">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              Productos
              <ChevronRight className="w-4 h-4" />
              <Link href={`/${params.category}`} className="hover:text-primary">
                {params.category}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/${params.category}/${params.sexo}`} className="hover:text-primary">
                {params.sexo}
              </Link>
            </div>
          </div>
        </div>

        <CategoryProducts products={data} />
      </div>
    </div>
  );
}
