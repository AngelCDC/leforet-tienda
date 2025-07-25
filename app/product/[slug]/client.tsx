"use client";

import { fullProduct } from "@/app/interface";
import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToBag from "@/app/components/AddTobag";
import Link from "next/link";

export default function ProductPage({ data }: { data: fullProduct }) {
  return (
    <div className="bg-white mt-6">
      <div className="x-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName} para {data.sexoName} 
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-6">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Comentarios
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">Delivery en 1-2 Días en Toda Maturín</span>
            </div>

            <div className="b-4 mb-6">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
              />
              <Link
                href={`https://wa.me/584120828474?text=*Hola,%20me%20interesa%20el%20siguiente%20articulo*.%0a*Producto:*%20${data.name}%0a*Categoria:*%20${data.categoryName}%0a*Precio:*%20${data.price}$`}
              >
                <Button>Comprar Ahora</Button>
              </Link>
            </div>

            <p className="mt-8 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
