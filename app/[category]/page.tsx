// app/category/[category]/page.tsx - Versión que incluye "all"

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { client } from "@/app/lib/sanity";
import CategoryProducts from "./client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

async function getDataWithValidation(category: string) {
  // Si es "all", obtener todos los productos
  if (category === "all") {
    const query = `{
      "category": {"name": "all", "_id": "all"},
      "products": *[_type=="product"]{
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name
      }
    }`;
    
    const result = await client.fetch(query);
    return result;
  }

  // Consulta normal para categorías específicas
  const query = `{
    "category": *[_type=="category" && name=="${category}"][0],
    "products": *[_type=="product" && category->name=="${category}" ]{
      _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name
    }
  }`;

  const result = await client.fetch(query);
  return result;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  if (params.category === "all") {
    return {
      title: "Todos los Productos | Le Forêt",
      description: "Explora todos nuestros productos únicos.",
      openGraph: {
        title: "Todos los Productos | Le Forêt",
        description: "Explora todos nuestros productos únicos.",
      },
    };
  }

  const { category: categoryData, products } = await getDataWithValidation(
    params.category
  );

  if (!categoryData) {
    return {
      title: "Página no encontrada | Le Forêt",
      description: "La página que buscas no existe.",
    };
  }

  const capitalized =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return {
    title: `Productos de ${capitalized} | Le Forêt`,
    description: `Explora productos únicos de la categoría ${capitalized}.`,
    openGraph: {
      title: `Compra productos de ${capitalized} | Le Forêt`,
      description: `Explora productos únicos de la categoría ${capitalized}.`,
      images: products[0]?.imageUrl
        ? [{ url: products[0].imageUrl, width: 1200, height: 630 }]
        : [],
    },
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 100;

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category: categoryData, products } = await getDataWithValidation(
    params.category
  );

  // Si no es "all" y la categoría no existe, mostrar 404
  if (params.category !== "all" && !categoryData) {
    notFound();
  }

  const pageTitle = params.category === "all" 
    ? "Todos los Productos" 
    : params.category;

  const breadcrumbText = params.category === "all" 
    ? "Todos" 
    : params.category;

  return (
    <div className="bg-white py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-gray-100">
          <div className="max-w-7xl mx-auto py-3">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              Productos
              <ChevronRight className="w-4 h-4" />
              <Link href={`/${params.category}`} className="hover:text-primary">
                {breadcrumbText}
              </Link>
            </div>
          </div>
        </div>

        {params.category === "all" && (
          <div className="">
            
          </div>
        )}

        <CategoryProducts products={products} />
      </div>
    </div>
  );
}