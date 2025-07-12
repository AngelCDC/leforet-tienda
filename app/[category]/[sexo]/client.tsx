"use client";

import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "@/app/interface";

export default function CategoryPage({
  data,
  category,
  sexo,
}: {
  data: simplifiedProduct[];
  category: string;
  sexo: string;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {sexo} para {category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                </div>
                <p className="text-s font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
