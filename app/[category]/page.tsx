// app/category/[category]/page.tsx - Versión que incluye "all" y "ofertas"

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

  // Si es "ofertas", buscar productos que tengan categoría con slug "ofertas"
  if (category === "Ofertas") {
    const query = `{ "products": *[_type=="product" && "Ofertas" in categories[]->name]{
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current
      }
    }`;
    
    const result = await client.fetch(query);
    return result;
  }

  // Consulta normal para categorías específicas (por nombre)
  const query = `{
    "category": *[_type=="category" && name=="${category}"][0],
    "products": *[_type=="product" && sexo->name=="${category}" ]{
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

  if (params.category === "Ofertas") {
    return {
      title: "Ofertas Especiales | Le Forêt",
      description: "Descubre nuestras mejores ofertas y productos en descuento.",
      openGraph: {
        title: "Ofertas Especiales | Le Forêt",
        description: "Descubre nuestras mejores ofertas y productos en descuento.",
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

  // Si no es "all" ni "ofertas" y la categoría no existe, mostrar 404
  if (params.category !== "all" && params.category !== "Ofertas" && !categoryData) {
    notFound();
  }

  const pageTitle = params.category === "all" 
    ? "Todos los Productos" 
    : params.category === "Ofertas"
    ? "Ofertas Especiales"
    : params.category;

  const breadcrumbText = params.category === "all" 
    ? "Todos" 
    : params.category === "Ofertas"
    ? "Ofertas"
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

        {params.category === "Ofertas" && (
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">🔥 Ofertas Especiales</h1>
            <p className="text-gray-600 mt-2">Descubre nuestros productos con los mejores precios</p>
          </div>
        )}

        <CategoryProducts products={products} />
      </div>
    </div>
  );
}